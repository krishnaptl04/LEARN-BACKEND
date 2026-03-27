function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
console.log(add('Krishna', true));
//JS Design-Loosely Types | Interpreted

function printUser(userObj) {
    console.log(userObj.fname);
    console.log(userObj.lname);
}

printUser({});
