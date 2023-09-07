/* 
Создайте объект Старбакса со всеми видами кофе, чая, можете другие напитки добавить. 
В объекте обязательно должны быть названия напитков и их описания. Правильно постройте архитектуру.
Далее, когда объект уже будет готов, напишите следующий функционал:
1. пользователь вводит кофе или чай, затем программа спрашивает какой кофе или чай, 
пользователь вводит название (latte) и если такой кофе есть в объекте, то принять заказ, если нет, то отказ.
(НЕ используйте цикл для объекта, прочитайте про in в интернете)
*/
var starbucks = {
    coffe: {
        icedCaffèAmericano: ' Охлаждённый чёрный кофе на основе эспрессо, по желанию можно добавить молоко или сливки, а также сироп для придания сладости. Поддерживая эко-инициативу, для охлажденных напитков, мы предлагаем стакан с крышкой, для которой не нужна трубочка.',
        caffèLatte: 'Напиток на основе эспрессо и молока с небольшим количеством молочной пены.',
        cappuccino: 'Напиток на основе эспрессо и молока с большим количеством молочной пены.',
        maramelMacchiato: 'Фирменный напиток Starbucks на основе эспрессо и молока с добавлением ванильного сиропа, украшенный карамельным соусом.',
        whiteChocolateMocha: 'Напиток на основе эспрессо и молока с добавлением  соуса белого шоколада, украшенный взбитыми сливками',
        caffèMocha: 'Напиток на основе эспрессо и молока с добавлением шоколадного соуса,  украшенный взбитыми сливками.',
    },
    tea: {
        matchaGreenTeaLatte: 'Фирменный горячий напиток на основе зеленого чая Маття с добавлением молока.',
        icedMatchaGreenTeaLatte: 'Фирменный охлаждённый напиток на основе зеленого чая Маття с добавлением молока. Поддерживая эко-инициативу, для охлажденных напитков, мы предлагаем стакан с крышкой, для которой не нужна трубочка.',
        chaiTeaLatte: 'Фирменный горячий чайный напиток на основе черного чая с медом, пряностями и молоком.',
        icedChaiTeaLatte: 'Фирменный охлаждённый чайный напиток на основе черного чая с медом, пряностями и молоком со льдом. Поддерживая эко-инициативу, для охлажденных напитков, мы предлагаем стакан с крышкой, для которой не нужна трубочка.',
        icedBlackTea: 'Тонизирующий черный чай с добавлением льда. Поддерживая эко-инициативу, мы отказались от трубочек, сделав удобные крышечки с более широким отверстием, чтобы пить было удобнее. Поддерживая эко-инициативу, для охлажденных напитков, мы предлагаем стакан с крышкой, для которой не нужна трубочка.',
        icedShakenBlackTea: 'Тонизирующий лимонад на основе черного чая. Поддерживая эко-инициативу, для охлажденных напитков, мы предлагаем стакан с крышкой, для которой не нужна трубочка.'
    }
}
// Запрашивает данные от пользователя
var beverage = prompt('coffe or tea?: ')
var nameBeverage = prompt('What exactly?: ')
// Переменные для функционала
var keys = Object.keys(starbucks)
var coffeKeys = Object.keys(starbucks.coffe)
var teaKeys = Object.keys(starbucks.tea)

if (keys.includes(beverage) && coffeKeys.includes(nameBeverage)) {
    console.log('Ваш заказ принят!');
    alert('Ваш заказ принят!')
}else if (keys.includes(beverage) && teaKeys.includes(nameBeverage)) {
    console.log('Ваш заказ принят!');
    alert('Ваш заказ принят!')
}else {
    alert(`Ксожелению нету ${nameBeverage}:`)
    console.error(`Ксожелению нету ${nameBeverage}:`)
}

/* 
Дан массив с названиями городов 
[Bishkek, Los Angeles, Chicago,  New York, Houston, Dallas, Philadelphia, Seattle]. 
Пройдитесь по этому массиву ЦИКЛОМ  и в консоли выведите только те города, в которых больше 9 символов
*/
var array = ['Bishkek', 'Los Angeles', 'Chicago', 'New York', 'Houston', 'Dallas', 'Philadelphia', 'Seattle']
for (var i = 0; i < array.length; i++) {
    if (array[i].length > 9) {
        console.log(array[i]);
    }
}

/*
Программа запрашивает число, ваша задача вывести день недели в зависимости от введенного числа. Используйте switch..case
*/
var num = Number(prompt('Введите число 1-7: '))
switch(num) {
    case 1:
        alert('Понедельник')
        break
    case 2:
        alert('Вторник')
        break
    case 3:
        alert('Среда')
        break
    case 4:
        alert('Четверг')
        break
    case 5:
        alert('Пятница')
        break
    case 6:
        alert('Суббота')
        break
    case 7:
        alert('Воскресенье')
        break
}