function randomNumber(min, max) {
    let przedzial = max - min;
    let n = Math.floor(Math.random() * przedzial + min);
    console.log(n);
}

function randomString(iloscZnakow) {
    let string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let stringArray = string.split('');
    let outputString = '';

    for (let i = 0; i < iloscZnakow; i++) {
        let index = Math.floor(Math.random() * stringArray.length);
        // process.stdout.write(`${stringArray[index]}`);
        outputString += stringArray[index];
    }

    console.log(outputString);
}

function randomArray(min, max, dlugosc) {
    let przedzial = max - min;
    let tab = [];

    for (let i = 0; i < dlugosc; i++) {
        tab[i] = Math.floor(Math.random() * przedzial + min);
    }
    console.log(tab);
    
}

export default {randomArray, randomNumber, randomString};


