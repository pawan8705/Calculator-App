let input = document.getElementById("input");
let button = document.querySelectorAll("button");
let string = '';
button.forEach(number => {
    number.addEventListener('click', (event) => {

        btntext = event.target.innerText;
        input.value += btntext;
        if (btntext == 'AC') {
            string = '';
            input.value = string;
        } else if (btntext == 'C') {
            string = string.toString().slice(0, -1);
            input.value = string;
        } else if (btntext == '=') {
            string = eval(string);
            input.value = string;
        } else {
            string += btntext;
            input.value = string;
        }
    })
})

