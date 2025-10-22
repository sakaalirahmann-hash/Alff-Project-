const display = document.getElementById("display");
const themeSwitch = document.getElementById("themeSwitch");

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Ganti simbol ÷ dan × agar bisa dihitung
        const expression = display.value.replace(/×/g, "*").replace(/÷/g, "/");
        const result = eval(expression);

        if (isNaN(result) || !isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch {
        display.value = "Error";
    }
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}
