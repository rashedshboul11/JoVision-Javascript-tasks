function button1() {
    let arr = []
    for (let i=0; i<100; ++i) arr[i] = i; 
    arr = arr.filter(x => x % 3 != 0); 
    console.log(arr); 
}

function button2() {
    let arr = []
    for (let i=0; i<150; ++i) arr[i] = i; 
    console.log(arr); 
}

function button3() {
    let arr = []
    for (let i=0; i<100; ++i) arr[i] = i; 
    for (let i=0; i<100; ++i) arr[i] += 3; 
    console.log(arr); 
}

function button4() {
    let arr = []
    for (let i=0; i<100; ++i) arr[i] = i; 
    for (let i=20; i<40; ++i) console.log(arr[i]); 
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
}

function button5() {
    let arr = []
    for (let i=0; i<100; ++i) arr[i] = i; 
    shuffleArray(arr); 
    console.log(arr); 
    arr.sort((a,b) => b - a); 
    console.log(arr); 
}