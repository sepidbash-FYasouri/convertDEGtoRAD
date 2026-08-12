const btnRtoD = document.querySelector(".b1");
const btnDtoR = document.querySelector(".b2");
const inputNum = document.querySelector(".inputNumR");
const counterValue = document.querySelector('.counter_value');



function con1() {
  document.querySelectorAll('.d3').forEach(el => {
    el.style.backgroundColor = 'rgba(125, 49, 149, 0.48)';
  })
  document.querySelectorAll('#converter').forEach(e => {
    e.textContent = 'تبدیل رادیان به درجه'
  });

  document.querySelectorAll('#converterInput').forEach(e => {
    e.textContent = 'عدد رادیان را وارد کنید:'
  });
  const inputValue = Number(inputNum.value);
  const result = inputValue*180/Math.PI;
  counterValue.textContent = result;
};

function con2() {
  document.querySelectorAll('.d3').forEach(el => {
    el.style.backgroundColor = 'rgba(58, 142, 53, 0.61)';
    converterInput

  })
  document.querySelectorAll('#converter').forEach(e => {
    e.textContent = 'تبدیل درجه به رادیان'
  });


  document.querySelectorAll('#converterInput').forEach(e => {
    e.textContent = 'عدد درجه را وارد کنید :'
  });
   const inputValue = Number(inputNum.value);
  const result = inputValue*Math.PI/180;
  counterValue.textContent = result;
};
btnRtoD.addEventListener("click", con1);
btnDtoR.addEventListener("click", con2)
