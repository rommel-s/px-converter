//1px = 0.026cm = 0.75pt
//1cm = 37.8px
//1em = 16px

const unitInput = document.getElementById("input-unit");

const cmToPx = document.getElementById("unit-cm-px");
const pxToCm = document.getElementById("unit-px-cm");
const emToPx = document.getElementById("unit-em-px");
const pxToEm = document.getElementById("unit-px-em");
const ptToPx = document.getElementById("unit-pt-px");
const pxToPt = document.getElementById("unit-px-pt");

const resultCmToPx = document.getElementById("result-cm-px");
const resultPxToCm = document.getElementById("result-px-cm");
const resultEmToPx = document.getElementById("result-em-px");
const resultPxToEm = document.getElementById("result-px-em");
const resultPtToPx = document.getElementById("result-pt-px");
const resultPxToPt = document.getElementById("result-px-pt");

document.getElementById("convert-btn").addEventListener("click", () => {
  if (unitInput.value === "") {
    unitInput.value === "0";
  } else {
    setAllParameters(unitInput.value);
  }
});

function setAllParameters(param) {
  centimeterAndPixel(param);
  emAndPixel(param);
  pointsAndPixel(param);
}

function centimeterAndPixel(inputtedValue) {
  let inputValue = parseFloat(inputtedValue);

  let cmValueToPx = 37.8;
  let pxValueToCm = 0.026;

  cmToPx.innerHTML = inputValue;
  pxToCm.innerHTML = inputValue;

  resultCmToPx.innerHTML = cmValueToPx * inputValue;
  resultPxToCm.innerHTML = pxValueToCm * inputValue;
}

function emAndPixel(inputtedValue) {
  let inputValue = parseFloat(inputtedValue);

  let emValueToPx = 16;
  let pxValueToEm = 0.0625;

  emToPx.innerHTML = inputValue;
  pxToEm.innerHTML = inputValue;

  resultEmToPx.innerHTML = emValueToPx * inputValue;
  resultPxToEm.innerHTML = pxValueToEm * inputValue;
}

function pointsAndPixel(inputtedValue) {
  let inputValue = parseFloat(inputtedValue);

  let ptValueToPx = 1.3;
  let pxValueToPt = 0.75;

  ptToPx.innerHTML = inputValue;
  pxToPt.innerHTML = inputValue;

  resultPtToPx.innerHTML = ptValueToPx * inputValue;
  resultPxToPt.innerHTML = pxValueToPt * inputValue;
}
