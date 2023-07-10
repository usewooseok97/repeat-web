// //var
// //let 과 같은 역활 예전언어방식
// const a =5;
// const b =2;
// //상수 정의
// //띄어쓰기안됨
// let myName = "wooseok";
// let d = 3;
// //변수 정의 바뀌기 가능
// console.log(a*b);
// console.log(a/b);
// console.log(a+d);
// console.log('hello'+myName);
// myName = "kangwooseok";
// console.log("hi"+myName);

// ////////////////////////////////////////////////////

// const amIFat = true;
// //''없는 true는 1을 의미하게됨
// const am = null;
// //비어있음(널값이라고 알려줌)
// let something;
// // 타입이 정의되지않음
// console.log(amIFat);
// console.log(something);

/////////////////////////////////////////////////////////


// const dayWeek = ['mon' , 'thu' , 'wen' , 'thu' , 'fri' , 'sau' , 'sun'];
// // arry => 변수(상수) = [,]; 이렇게생성
// // const nonsense = [1,2,'안녕',true];
// console.log(dayWeek[4]);
// console.log(dayWeek);
// dayWeek.push('fin');
// // 배열에 한개 더추가한다
// console.log(dayWeek);

/////////////////////////////////////////////////////////

// const playern = "wooseok";
// const player2 = 165;
// const player3 = false;
// const palace = "fat";

// const player = ["wooseok",165,false,"fat"];

const player = {
    name: "wooseok",
    point: 16,
    fat: false,
    palace: true
};
console.log(player);
console.log(player["name"]);
player.palace = false;
player.lastname = "patato";
player.point = player.point + 4;
console.log(player);
