
function openCart(){

    showPage(
        'menu',
        document.querySelectorAll('.nav-item')[1]
    );

    setTimeout(() => {

        document.querySelector('.cart')
        .scrollIntoView({
            behavior:'smooth'
        });

    }, 100);
}

let total = 0;
let count = 0;
let cartItems = [];
let captchaCode = "";

function showPage(id, el){

    document.querySelectorAll('.page')
    .forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById(id)
    .classList.add('active');

    document.querySelectorAll('.nav-item')
    .forEach(btn => {
        btn.classList.remove('active');
    });

    el.classList.add('active');
}
function add(name, price){

    cartItems.push({
        name,
        price
    });

    total += price;
    count++;

    renderCart();
}
function removeItem(index){

    total -= cartItems[index].price;

    count--;

    cartItems.splice(index, 1);

    renderCart();
}
function renderCart(){

    const cart = document.getElementById("cart");

    cart.innerHTML = "";

    cartItems.forEach((item, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <div style="
                display:flex;
                justify-content:space-between;
                align-items:center;
                width:100%;
                gap:15px;
            ">

                <div>
                    <strong>${item.name}</strong>
                    <br>
                    <span>${item.price} ₽</span>
                </div>

                <button onclick="removeItem(${index})"
                style="
                    background:#ff3b30;
                    padding:8px 12px;
                    border-radius:10px;
                ">
                    ✕
                </button>

            </div>
        `;

        cart.appendChild(li);
    });

    document.getElementById("total")
        .innerText = total;

    document.getElementById("cartCount")
        .innerText = count;
}
function generateCaptcha(){

    captchaCode = Math.floor(
        1000 + Math.random() * 9000
    ).toString();

    document.getElementById(
        "captchaBox"
    ).innerText = captchaCode;
}
function order(){

    generateCaptcha();

    document.getElementById(
        "captchaInput"
    ).value = "";

    document.getElementById(
        "orderModal"
    ).style.display = "flex";
}

function closeModal(){

    document.getElementById("orderModal")
    .style.display = "none";
}

function confirmOrder(){

    const name =
    document.getElementById("clientName").value;

    const phone =
    document.getElementById("clientPhone").value;

    const address =
    document.getElementById("clientAddress").value;

    const captcha =
    document.getElementById("captchaInput").value;

    if(
        name === "" ||
        phone === "" ||
        address === ""
    ){
        alert("Заполните все поля");
        return;
    }

   if(captcha !== captchaCode){

    alert("Неверная капча");

    generateCaptcha();

    return;
}

    document.getElementById("status")
    .innerHTML = `
        <div style="
            margin-top:20px;
            padding:25px;
            border-radius:20px;
            background:
            linear-gradient(
                135deg,
                #00b894,
                #00d2a0
            );
            color:white;
            font-size:22px;
            text-align:center;
            box-shadow:
            0 10px 30px rgba(0,0,0,0.25);
        ">

            ✅ Спасибо за заказ, ${name}!<br><br>

            🚗 Курьер уже готовит доставку.<br>

            📞 Мы скоро свяжемся с вами.

        </div>
    `;

    cartItems = [];
    total = 0;
    count = 0;

    renderCart();

    closeModal();
}
const products = [

{
    name:"Бургер Fire",
    price:299,
    cat:"burgers",
    img:"images/burger1.jpeg"
},

{
    name:"Чикен Кранч",
    price:249,
    cat:"burgers",
    img:"images/burger4.jpeg"
},

{
    name:"Биг Бургер XL",
    price:359,
    cat:"burgers",
    img:"images/burger6.jpeg"
},
{
    name:"Бургер Чиз",
    price:279,
    cat:"burgers",
    img:"images/burger2.jpeg"
},
{
    name:"Двойной Бургер",
    price:399,
    cat:"burgers",
    img:"images/burger3.jpeg"
},
{
    name:"Бургер BBQ",
    price:319,
    cat:"burgers",
    img:"images/burger5.jpeg"
},
{
    name:"Комбо Биг",
    price:499,
    cat:"combo",
    img:"images/kombo1.jpeg"
},

{
    name:"Комбо Макс",
    price:599,
    cat:"combo",
    img:"images/kombo2.jpeg"
},
{
    name:"Комбо Лайт",
    price:499,
    cat:"combo",
    img:"images/kombo3.jpeg"
},
{
    name:"Комбо Друзья",
    price:799,
    cat:"combo",
    img:"images/kombo4.jpeg"
},
{
    name:"Комбо Семейное",
    price:999,
    cat:"combo",
    img:"images/kombo5.jpeg"
},
{
    name:"Кола",
    price:99,
    cat:"drinks",
    img:"images/drink1.jpeg"
},
{
    name:"Чай",
    price:89,
    cat:"drinks",
    img:"images/drink2.jpeg"
},
{
    name:"Лимонад",
    price:119,
    cat:"drinks",
    img:"images/drink3.jpeg"
},
{
    name:"Кофе",
    price:149,
    cat:"drinks",
    img:"images/drink4.jpeg"
},
{
    name:"Молочный коктейль",
    price:199,
    cat:"drinks",
    img:"images/drink5.jpeg"
},
{
    name:"Сок Апельсин",
    price:99,
    cat:"drinks",
    img:"images/drink6.jpeg"
},

{
    name:"Картофель Фри",
    price:129,
    cat:"snacks",
    img:"images/snak1.jpeg"
},

{
    name:"Наггетсы",
    price:199,
    cat:"snacks",
    img:"images/snak2.jpeg"
},
{
    name:"Крылышки",
    price:249,
    cat:"snacks",
    img:"images/snak3.jpeg"
},
{
    name:"Луковые кольца",
    price:179,
    cat:"snacks",
    img:"images/snak4.jpeg"
},
{
    name:"Сырные палочки",
    price:229,
    cat:"snacks",
    img:"images/snak5.jpeg"
},
{
    name:"Чизкейк",
    price:199,
    cat:"desserts",
    img:"images/desert1.jpeg"
},
{
    name:"Пирожок яблочный",
    price:299,
    cat:"desserts",
    img:"images/desert2.jpeg"
},
{
    name:"Шоколадный маффин",
    price:149,
    cat:"desserts",
    img:"images/desert4.jpeg"
},
{
    name:"Пончик",
    price:119,
    cat:"desserts",
    img:"images/desert3.jpeg"
},
{
    name:"Мороженое",
    price:149,
    cat:"desserts",
    img:"images/desert5.jpeg"
}
];

function showPage(id, el){

    document.querySelectorAll('.page')
        .forEach(p => p.classList.remove('active'));

    document.getElementById(id)
        .classList.add('active');

    document.querySelectorAll('.nav-item')
        .forEach(b => b.classList.remove('active'));

    el.classList.add('active');

    if(id === "menu"){

        currentCat = "all";

        document.querySelectorAll('.cat')
            .forEach(c => c.classList.remove('active'));

        document.querySelectorAll('.cat')[0]
            .classList.add('active');

        render();
    }
}

function setCat(cat, el){

    currentCat = cat;

    document.querySelectorAll('.cat')
        .forEach(c => c.classList.remove('active'));

    el.classList.add('active');

    render();
}

function render(){

    const grid = document.getElementById("menuGrid");

    grid.innerHTML = "";

    products
        .filter(p => currentCat === "all" || p.cat === currentCat)

        .forEach(p => {

            const card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <img src="${p.img}" alt="${p.name}">

                <div class="card-content">

                    <h3>${p.name}</h3>

                    <div class="bottom">

                        <span>${p.price} ₽</span>

                        <button onclick="add('${p.name}', ${p.price})">
                            В корзину
                        </button>

                    </div>

                </div>
            `;

            grid.appendChild(card);
        });
}
let currentCat = "all";
generateCaptcha();
render();

