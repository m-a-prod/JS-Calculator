let operator;

function selectedBtn(idOfBtn) {
    document.getElementById(idOfBtn).classList.add('selected');
    switch (idOfBtn) {
        case '+' :
            document.getElementById('-').classList.remove('selected');
            document.getElementById('*').classList.remove('selected');
            document.getElementById('/').classList.remove('selected');
            break;
        case '-' :
            document.getElementById('+').classList.remove('selected');
            document.getElementById('*').classList.remove('selected');
            document.getElementById('/').classList.remove('selected');
            break;
        case '*' :
            document.getElementById('-').classList.remove('selected');
            document.getElementById('+').classList.remove('selected');
            document.getElementById('/').classList.remove('selected');
            break;
        case '/' :
            document.getElementById('-').classList.remove('selected');
            document.getElementById('*').classList.remove('selected');
            document.getElementById('+').classList.remove('selected');
            break;
    }
}

function counting() {
    let result;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    document.getElementById("result").innerHTML = result
}