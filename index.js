const button = document.getElementById("addBtn");
const lists = document.getElementById("list");

button.addEventListener("click", async function () {
// データのやり取り
const res = await fetch("https://jsonplaceholder.typicode.com/users");
const users = await res.json();


// // // DOM操作
// // // forメソッド　usersをループ
// for (let index = 0; index <users.length; index++) {
//     const user =users[index];
//     //   HTML要素の生成
// const list = document.createElement("li");
// list.innerText = user.name;
// // listの数を増やす
// lists.appendChild(list);
// }


// // DOM操作
// // forEachメソッド　usersをループ
users.forEach( (user) => {
   // HTML要素の生成
const list = document.createElement("li");
list.innerText = user.name;
// listの数を増やす
lists.appendChild(list);
});



});