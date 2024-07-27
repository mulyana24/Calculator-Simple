const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "/", "*", "+", "-", "="];
let output = "";

// membuat function calculate based button clicked
const calculate = (btnValue) => {
  // console.log(btnValue)
  if (btnValue === "=" && output != "") {
    // Jika output %, replace dengan '/100' sebelum calculating
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (btnValue === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};
// addEventListener button, call calculate() click
buttons.forEach(function (button) {
  // button click listener calls calculate() dengan dataset value sebagai argument
  button.addEventListener("click", function (event) {
    calculate(event.target.dataset.value);
  });
});
