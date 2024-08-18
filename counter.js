let count = document.getElementById('counterValue');
count = 0;

function incrementCounter() {
    count = count + 1;
    counterValue.innerHTML = count;
}

function decrementCounter() {
    count = count - 1;
    counterValue.innerHTML = count;
}

function resetCounter() {
    count = 0;
    counterValue.innerHTML = count;
}

function toggleVisibility() {
    let visibility = document.getElementById('counterValue').style.visibility;

    if (visibility === 'visible') {
        document.getElementById('counterValue').style.visibility = 'hidden';
    } else {
        document.getElementById('counterValue').style.visibility = 'visible';
    }
}