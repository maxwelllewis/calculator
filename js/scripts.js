var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("add:"));
var number2 = parseInt(prompt("add:"));
var result = add(number1, number2);
alert(result);

var sub = function(number1, number2) {
  return number1 - number2;
};

var number1 = parseInt(prompt("subtract:"));
var number2 = parseInt(prompt("subtract:"));
var result = sub(number1, number2);
alert(result);

var div = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("divide:"));
var number2 = parseInt(prompt("divide:"));
var result = div(number1, number2);
alert(result);

var multi = function(number1, number2) {
  return number1 * number2;
};

var number1 = parseInt(prompt("multiply:"));
var number2 = parseInt(prompt("multiply:"));
var result = multi(number1, number2);
alert(result);
