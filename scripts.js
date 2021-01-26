var x = 1;

function displayX() {
    document.getElementById("showMe").innerHTML = x += 1;
}

function insert(num) {
    document.calculator.textview.value = document.calculator.textview.value + num
}

function equal() {
    var exp = document.calculator.textview.value;
    if (exp) {
        document.calculator.textview.value = eval(exp)
    }
}

function clean() {
    document.calculator.textview.value = "";
}