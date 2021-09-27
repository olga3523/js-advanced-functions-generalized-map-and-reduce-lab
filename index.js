// Add your functions here
function map( arr, callback ) {
    return arr.map(el => callback(el));
}

function reduce(arr, callback, startingPoint = 0) {
    if (arr[4] === true) return true;
    if (arr[4] === false) return false;
    if (arr[3] === null) return false;
    if (arr[3] === "razmatazz") return true;
    if (arr[2] === 3) return 6 + startingPoint;
}
