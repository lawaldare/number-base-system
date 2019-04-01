const btn = document.getElementById('btn');
const input = document.getElementById('input');
const result = document.getElementById('result');

const btn2 = document.getElementById('btn2');
const to = document.getElementById('to');
const from = document.getElementById('from');
const input2 = document.getElementById('input2');
const result2 = document.getElementById('result2');


btn.addEventListener('click', function(e){
  let num = input.value;
  let numToArray = String(num).split('');
  if(numToArray.length > 8) return alert('It should not be more than a 8-digits number');
  for (var digit of numToArray) {
    if (digit !== '1' && digit !== '0') return alert('please enter only 0 and 1');
}
  let output = parseInt(num, 2);
  result.innerHTML = output;
})


btn2.addEventListener('click', function(){
  let num = input2.value;
  let numToArray = String(num).split('');
  if(numToArray.length > 8) return alert('It should not be more than 8 digits number');
  for (var digit of numToArray) {
		if (digit >= from.value ) return alert('please none of your digit should be more then your base number');
  }

  const baseTen = parseInt(num, from);
  const output = baseTen.toString(to.value);
  result2.textContent = output;

})

