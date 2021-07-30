const even = () => {
    let nums = [];
    for(let i = 1; i <= 50; 1++) {
        if(i % 2 == 0) {
            nums.push(i);
        }
    }
    return nums;
}
console.log(even());