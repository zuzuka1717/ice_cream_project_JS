let toppingColors = ['#aadfe6', '#412615', '#f06aad'];
let counter1 = 0;
let counter2 = 0;


function selectTaste(value, id) {
  let taste = '';
  if (value === 'vanilla') taste = '#f5ebcc';
  else if (value === 'kiwi') taste = '#aaec98';
  else if (value === 'berries') taste = '#f0abdf';

  document.querySelector(`.${id}`).style.backgroundColor = taste;
};

function setCounterValue(counter) {
  return counter < toppingColors.length - 1 ? counter + 1 : 0;
}

function selectTopping(id) {
  if (id === 'topping-first') {
document.getElementById('first').style.backgroundImage = `radial-gradient(circle at 20px 12px, ${toppingColors[counter1]} 35px, transparent 31px)`; 
counter1 = setCounterValue(counter1);
 }

 if (id === 'topping-third') {
  document.getElementById('third').style.backgroundImage = `radial-gradient(circle at 20px 12px, ${toppingColors[counter2]} 35px, transparent 31px)`; 
  counter2 = setCounterValue(counter2);
}
};