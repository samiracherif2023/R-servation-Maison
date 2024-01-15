function signup() {
    //récupération des données
    var Name = document.getElementById("name").value;
    //controle de saisie name

    var isNameValid = checkLength(Name, 6);
    if (isNameValid == false) {
        document.getElementById('NameError').innerHTML = "Name should be at least 6 caracters"
        document.getElementById('NameError').style.color = "red"
    }
    else {
        document.getElementById('NameError').innerHTML = ""
    }

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    //controle de saisie password

    var isPassWordValid = checkLength(password, 5);
    if (isPassWordValid == false) {
        document.getElementById('PassWordError').innerHTML = "Pass Word should be at least 5 caracters"
        document.getElementById('PassWordError').style.color = "red"
    }
    else {
        document.getElementById('PassWordError').innerHTML = ""
    }

    var confirmPassword = document.getElementById("confirmPassword").value;
    //controle de saisie confirm password
    var isConfirmPwd = validPassWord(password, confirmPassword);
    if (isConfirmPwd == false) {
        document.getElementById('ConfirmPassWordError').innerHTML = "please check password"
        document.getElementById('ConfirmPassWordError').style.color = "red"
    }
    else {
        document.getElementById('ConfirmPassWordError').innerHTML = ""
    }

    var tel = document.getElementById("tel").value;
    //controle de saisie phone
    var isTelValid = checkPhone(tel, 8);
    if (isTelValid == false) {
        document.getElementById('ConfirmTelError').innerHTML = "please check tel"
        document.getElementById('ConfirmTelError').style.color = "red"
    }
    else {
        document.getElementById('ConfirmTelError').innerHTML = ""
    }

    if (isNameValid == true && isPassWordValid == true && isConfirmPwd == true && isTelValid == true) {
        var usersTab = getFromLs('users');
        var user = {
            id: generatedId(usersTab) + 1,
            name: Name,
            email: email,
            pwd: password,
            confirmPwd: confirmPassword,
            tel: tel,
            role: "client",
        }
        //save into LS

        usersTab.push(user);
        localStorage.setItem("users", JSON.stringify(usersTab));
        location.replace('login.html');
    }
}

function signupProprety() {

    //récupération des données
    var Name = document.getElementById("nameProprety").value;
    //controle de saisie name

    var isNameValid = checkLength(Name, 6);
    if (isNameValid == false) {
        document.getElementById('NamePropretyError').innerHTML = "Name should be at least 6 caracters"
        document.getElementById('NamePropretyError').style.color = "red"
    }
    else {
        document.getElementById('NamePropretyError').innerHTML = ""
    }

    var email = document.getElementById("emailProprety").value;
    var password = document.getElementById("passwordProprety").value;
    //controle de saisie password

    var isPassWordValid = checkLength(password, 5);
    if (isPassWordValid == false) {
        document.getElementById('PassWordPropretyError').innerHTML = "Pass Word should be at least 5 caracters"
        document.getElementById('PassWordPropretyError').style.color = "red"
    }
    else {
        document.getElementById('PassWordPropretyError').innerHTML = ""
    }

    var confirmPassword = document.getElementById("confirmPasswordProprety").value;
    //controle de saisie confirm password
    var isConfirmPwd = validPassWord(password, confirmPassword);
    if (isConfirmPwd == false) {
        document.getElementById('ConfirmPassWordPropretyError').innerHTML = "please check password"
        document.getElementById('ConfirmPassWordPropretyError').style.color = "red"
    }
    else {
        document.getElementById('ConfirmPassWordPropretyError').innerHTML = ""
    }

    var tel = document.getElementById("telProprety").value;
    //controle de saisie phone
    var isTelValid = checkPhone(tel, 8);
    if (isTelValid == false) {
        document.getElementById('ConfirmTelPropretyError').innerHTML = "please check tel"
        document.getElementById('ConfirmTelPropretyError').style.color = "red"
    }
    else {
        document.getElementById('ConfirmTelPropretyError').innerHTML = ""
    }

    // récupération des données
    var propretyName = document.getElementById("nameHouse").value;
    var address = document.getElementById("adressProprety").value;
    //controle de saisie name

    var isPropretyNameValid = checkLength(Name, 7);
    if (isPropretyNameValid == false) {
        document.getElementById('NameHouseError').innerHTML = "Name House should be at least 7 caracters"
        document.getElementById('NameHouseError').style.color = "red"
    }
    else {
        document.getElementById('NameHouseError').innerHTML = ""
    }
    if (isNameValid == true && isPassWordValid == true && isConfirmPwd == true && isTelValid == true && isPropretyNameValid == true) {

        var usersTab = getFromLs('users');
        var user = {
            id: generatedId(usersTab) + 1,
            name: Name,
            email: email,
            pwd: password,
            confirmPwd: confirmPassword,
            tel: tel,
            role: "proprety",
            status: "NOK",
            propretyName: propretyName,
            address: address,
        }
        //save into LS

        usersTab.push(user);
        localStorage.setItem("users", JSON.stringify(usersTab));
        location.replace('login.html');

    }

}

function signupAdmin() {
    //récupération des données
    var Name = document.getElementById("nameAdmin").value;
    //controle de saisie name

    var isNameValid = checkLength(Name, 6);
    if (isNameValid == false) {
        document.getElementById('NameAdminError').innerHTML = "Name should be at least 6 caracters"
        document.getElementById('NameAdminError').style.color = "red"
    }
    else {
        document.getElementById('NameAdminError').innerHTML = ""
    }

    var email = document.getElementById("emailAdmin").value;
    var password = document.getElementById("passwordAdmin").value;
    //controle de saisie password

    var isPassWordValid = checkLength(password, 5);
    if (isPassWordValid == false) {
        document.getElementById('PassWordAdminError').innerHTML = "Pass Word should be at least 5 caracters"
        document.getElementById('PassWordAdminError').style.color = "red"
    }
    else {
        document.getElementById('PassWordAdminError').innerHTML = ""
    }

    var confirmPassword = document.getElementById("confirmPasswordAdmin").value;
    //controle de saisie confirm password
    var isConfirmPwd = validPassWord(password, confirmPassword);
    if (isConfirmPwd == false) {
        document.getElementById('ConfirmPassWordAdminError').innerHTML = "please check password"
        document.getElementById('ConfirmPassWordAdminError').style.color = "red"
    }
    else {
        document.getElementById('ConfirmPassWordAdminError').innerHTML = ""
    }

    var tel = document.getElementById("telAdmin").value;
    //controle de saisie phone
    var isTelValid = checkPhone(tel, 8);
    if (isTelValid == false) {
        document.getElementById('ConfirmTelAdminError').innerHTML = "please check tel"
        document.getElementById('ConfirmTelAdminError').style.color = "red"
    }
    else {
        document.getElementById('ConfirmTelAdminError').innerHTML = ""
    }

    if (isNameValid == true && isPassWordValid == true && isConfirmPwd == true && isTelValid == true) {
        var usersTab = getFromLs('users');
        var user = {
            id: generatedId(usersTab) + 1,
            name: Name,
            email: email,
            pwd: password,
            confirmPwd: confirmPassword,
            tel: tel,
            role: "admin",
        }
        //save into LS

        usersTab.push(user);
        localStorage.setItem("users", JSON.stringify(usersTab));
        location.replace('login.html');
    }



}

function login() {
    //récupération des données
    var emailValue = document.getElementById("email").value;
    var pwdValue = document.getElementById("pwd").value;
    // check if email & pwd exist
    var findedUser;
    var usersTab = getFromLs('users');
    for (var i = 0; i < usersTab.length; i++) {
        if (usersTab[i].email == emailValue && usersTab[i].pwd == pwdValue) {
            findedUser = usersTab[i];
            break;
        }
    }
    // on a trouvé un user ayant le meme emain & pwd
    if (findedUser) {
        //l'user trouvé est un client
        if (findedUser.role == "client") {
            localStorage.setItem('connectedUserId', findedUser.id);
            location.replace('index.html');
        }
        //l'user trouvé est un store
        else if (findedUser.role == "proprety") {
            if (findedUser.status == "NOK") {
                document.getElementById('propretyStatusError').innerHTML = "Account not yet verified"
                document.getElementById('propretyStatusError').style.color = "red"
            }
            else {
                localStorage.setItem('connectedUserId', findedUser.id);
                location.replace('owner.html');
            }
        }
        //l'user trouvé est un admin
        else {
            localStorage.setItem('connectedUserId', findedUser.id);
            location.replace('admin.html');
        }

    }
    //l'email et le pwd tapés dans le login soient incorrectes soit l'user n'a pas un compte
    else {
        document.getElementById('loginError').innerHTML = 'Please check email/pwd';
        document.getElementById('loginError').style.color = 'red';
    }
}



function checkLength(ch, nb) {
    return (ch.length >= nb);
}

function validPassWord(ch1, ch2) {
    return (ch1 == ch2)
}
function checkPhone(value, n) {
    return (value.length == n)
}
function getFromLs(key) {
    return JSON.parse(localStorage.getItem(key) || "[]");
}
function generatedId(T) {
    var max;
    if (T.length == 0) {
        max = 0;
    }
    else {
        max = T[0].id;
        for (var i = 0; i < T.length; i++) {
            if (T[i].id > max) {
                max = T[i].id;
            }
        }
    }
    return max;
}
function checkNumber(n1, n2) {
    return (Number(n1) > n2);
}


function addHouse() {
    //RECUPERATION DE DONNEES
    var nameHouse = document.getElementById("nameHouse").value;
    var isNameHouseValid = checkLength(nameHouse, 8);
    //controle de saisie
    if (isNameHouseValid == false) {
        document.getElementById('NameHouseError').innerHTML = "Name House should be at least 8 caracters"
        document.getElementById('NameHouseError').style.color = 'red'
    }
    else {
        document.getElementById('NameHouseError').innerHTML = ""
    }
    var paysHouse = document.getElementById("paysHouse").value;
    var capacityHouse = document.getElementById("capacityHouse").value;
    var isCapacityHouseValid = checkNumber(capacityHouse, 1);
    if (isCapacityHouseValid == false) {
        document.getElementById('CapacityError').innerHTML = "Capacity should > a 1"
        document.getElementById('CapacityError').style.color = "Red"
    }
    else {
        document.getElementById('CapacityError').innerHTML = ""
    }
    var description = document.getElementById("descriptionHouse").value;

    var nbreRoom = document.getElementById("nbreRoom").value;
    var isnbreRoomValid = checkNumber(nbreRoom, 1);
    if (isnbreRoomValid == false) {
        document.getElementById('nbreRoomError').innerHTML = "Number Room should > a 1"
        document.getElementById('nbreRoomError').style.color = "Red"
    }
    else {
        document.getElementById('nbreRoomError').innerHTML = ""
    }
    var nbreBathroom = document.getElementById("nbreBathroom").value;
    var isnbreBathroomValid = checkNumber(nbreBathroom, 1);
    if (isnbreBathroomValid == false) {
        document.getElementById('nbreBathroomError').innerHTML = "Number Bathroom should > a 1"
        document.getElementById('nbreBathroomError').style.color = "Red"
    }
    else {
        document.getElementById('nbreBathroomError').innerHTML = ""
    }

    //validation
    if (isNameHouseValid && isCapacityHouseValid && isnbreRoomValid && isnbreBathroomValid) {
        var houseTab = getFromLs("houses");
        var connectedUserId = localStorage.getItem('connectedUserId');
        // creation d'objet
        var house = {
            id: generatedId(houseTab) + 1,
            name: nameHouse,
            paysHouse: paysHouse,
            capacityHouse: capacityHouse,
            description: description,
            nbreRoom: nbreRoom,
            nbreBathroom: nbreBathroom,
            idProp: connectedUserId,

        }
        //save into LS
        houseTab.push(house);
        localStorage.setItem("houses", JSON.stringify(houseTab));
    }
}

function addRoom() {
    var nameRoom = document.getElementById("nameRoom").value;
    var isNameRoomValid = checkLength(nameRoom, 4);
    if (isNameRoomValid == false) {
        document.getElementById('nameRoomError').innerHTML = "Name Room should be at least 4 caracters"
        document.getElementById('nameRoomError').style.color = "red"
    }
    else {
        document.getElementById('nameRoomError').innerHTML = ""
    }
    var surfaceRoom = document.getElementById('surfaceRoom').value;

    var isSurfaceValid = checkNumber(surfaceRoom, 10);
    if (isSurfaceValid == false) {
        document.getElementById('surfaceRoomError').innerHTML = "Surface should > a 10"
        document.getElementById('surfaceRoomError').style.color = "red"
    }
    else {
        document.getElementById('surfaceRoomError').innerHTML = ""
    }

    var priceRoom = document.getElementById("priceRoom").value;
    var isPriceValid = checkNumber(priceRoom, 0);
    if (isPriceValid == false) {
        document.getElementById('PriceError').innerHTML = "Price should > a 0"
        document.getElementById('PriceError').style.color = "red"
    }
    else {
        document.getElementById('PriceError').innerHTML = ""
    }
    var numberBed = document.getElementById("numberBed").value;
    var isNumberBedValid = checkNumber(numberBed, 0);
    if (isNumberBedValid == false) {
        document.getElementById('numberBedError').innerHTML = "Number Bed should > a 0"
        document.getElementById('numberBedError').style.color = "red"
    }
    else {
        document.getElementById('numberBedError').innerHTML = ""
    }
    var numberPeople = document.getElementById("numberPeople").value;
    var isNumberPeopleValid = checkNumber(numberPeople, 0);
    if (isNumberPeopleValid == false) {
        document.getElementById('numberPeopleError').innerHTML = "Number People should > a 0"
        document.getElementById('numberPeopleError').style.color = "red"
    }
    else {
        document.getElementById('numberPeopleError').innerHTML = ""
    }

    if (isPriceValid == true && isNumberBedValid == true && isNumberPeopleValid == true && isNameRoomValid == true && isSurfaceValid == true) {
        // var displayHouseId = localStorage.getItem('displayHouseId');
        var roomTab = getFromLs("rooms");
        var displayedHouseId = getFromLs('displayedHouseId');

        // creation d'objet
        var room = {
            id: generatedId(roomTab) + 1,
            nameRoom: nameRoom,
            surfaceRoom: surfaceRoom,
            priceRoom: priceRoom,
            numberBed: numberBed,
            numberPeople: numberPeople,
            idHouse: displayedHouseId,

        }
        //save into LS
        roomTab.push(room);
        localStorage.setItem("rooms", JSON.stringify(roomTab));
    }
}

function goToDisplayHouse(id) {

    localStorage.setItem('displayedHouseId', id);
    location.replace('housesDetails.html');
}

function displayHouses() {
    var housesTab = getFromLs('houses');
    var content = '';
    for (var i = 0; i < housesTab.length; i++) {

        content = content + `
        
                        <div id="list-type" class="proerty-th">
                            <div class="col-sm-6 col-md-4 p0">
                                <div class="box-two proerty-item">
                                    <div class="item-thumb">
                                        <a href=""><img src="assets/img/demo/property-${i + 1}.jpg"></a>
                                    </div>
                                    <div class="item-entry overflow">
                                        <h5><a href=""> ${housesTab[i].name} </a></h5>
                                        <div class="dot-hr"></div>
                                        <span class="pull-left"><b>Pays</b> ${housesTab[i].paysHouse} </span>
                                        <span class="proerty-price pull-right"></span>
                                        <p style="display: none;"></p>
                                        <div class="property-icon">
                                            <img src="assets/img/icon/bed.png"> ${housesTab[i].nbreRoom}
                                            <img src="assets/img/icon/shawer.png"> ${housesTab[i].nbreBathroom}
                                            <button class="btn btn-primary" style="margin-left: 150px;" onclick="goToDisplayHouse(${housesTab[i].id})">Display</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>`
    }
    document.getElementById('housesDiv').innerHTML = content;
}

function displayHouseDetails() {
    var id = localStorage.getItem('displayedHouseId');
    var housesTab = getFromLs('houses');
    var roomsTab = getFromLs('rooms');
    var displayedHouse;
    var displayedRoom;

    for (var i = 0; i < housesTab.length; i++) {
        if (housesTab[i].id == id) {
            displayedHouse = housesTab[i];

            break;
        }
    }
    for (var i = 0; i < roomsTab.length; i++) {
        if (housesTab[i].id == id) {
            displayedRoom = roomsTab[i];

            break;
        }
    }

    document.getElementById('nameDiv').innerHTML = displayedHouse.name;
    document.getElementById('paysDiv').innerHTML = displayedHouse.paysHouse;
    document.getElementById('capacityDiv').innerHTML = displayedHouse.capacityHouse;
    document.getElementById('roomDiv').innerHTML = displayedHouse.nbreRoom;
    document.getElementById('bathroomDiv').innerHTML = displayedHouse.nbreBathroom;
    document.getElementById('descriptionDiv').innerHTML = displayedHouse.description;
    document.getElementById('priceDiv').innerHTML = displayedRoom.priceRoom;

}

function goToDisplayRoom(id) {

    localStorage.setItem('displayedRoomId', id);
    location.replace('rooms.html');
}

function displayRooms() {
    var id = localStorage.getItem('displayedHouseId');
    var roomsTab = getFromLs('rooms');
    var content = '';
    for (var i = 0; i < roomsTab.length; i++) {
        if (roomsTab[i].idHouse == id) {
            content = content + `
        
            <section class="post">
            <div class="text-center padding-b-50">
                <h2 class="wow fadeInLeft animated">${roomsTab[i].nameRoom}</h2>
                <div class="title-line wow fadeInRight animated"></div>
            </div>
    
            <div class="row">
                <div class="col-sm-6">
                    <p class="author-category">
                        Prix par nuité <a href="#">${roomsTab[i].priceRoom}</a> DT
                    </p>
                </div>
            </div>
            <div class="image wow fadeInLeft animated">
                <a href="single.html">
                    <img src="assets/img/blog${i + 1}.jpg" class="img-responsive" alt="Example blog post alt">
                </a>
            </div>
            <p class="intro">
           <div> Nombre des lits ${roomsTab[i].numberBed} </div>
          
           <div> Nombre des invités dans chaque chambre ${roomsTab[i].numberPeople} </div>
            </p>
            <p class="read-more">
            </p>
            <button class="btn btn-primary" style="margin-left: 150px;" onclick="goToDisplayRoom(${roomsTab[i].id})">Display Room</button>

        </section> `
        }
    }

    document.getElementById('roomsDiv').innerHTML = content;

}

function displaySelectedRoom() {
    var displayedRoomId = localStorage.getItem('displayedRoomId');
    var findedRoom = searchObj(displayedRoomId, 'rooms')
    document.getElementById('nameHouse').innerHTML = searchObj(findedRoom.idHouse, 'houses').name;
    document.getElementById('nameRoom').innerHTML = findedRoom.nameRoom;
    document.getElementById('surfaceRoom').innerHTML = findedRoom.surfaceRoom;
    document.getElementById('priceRoom').innerHTML = findedRoom.priceRoom;
    document.getElementById('numberBedRoom').innerHTML = findedRoom.numberBed;
    //document.getElementById('numberPeopleRoom').innerHTML = findedRoom.numberPeople;

}

//fonction qui fait la recherche d'un objet selon l'ID et la clé et retourne tout l'objet
function searchObj(id, key) {
    var T = JSON.parse(localStorage.getItem(key) || '[]');
    var findedObj;
    for (var i = 0; i < T.length; i++) {
        if (T[i].id == id) {
            findedObj = T[i];
            break;
        }

    }
    return findedObj;
}

function bookRoom() {
    //recupérer la quantité de produits à commander donnée par l'utilisateur
    var numberNight = document.getElementById('numberNight').value;
    var userId = localStorage.getItem('connectedUserId');
    var houseId = localStorage.getItem('displayedHouseId');
    var RoomId = localStorage.getItem('displayedRoomId');
    var ordersTab = getFromLs('orders');
    var findedRoom = searchObj(RoomId, 'rooms')
    if (Number(numberNight) > 0 && Number(numberNight) <= Number(findedRoom.numberBed)) {
        // création d'obj
        var order = {
            id: generatedId(ordersTab) + 1,
            userId: userId,
            houseId: houseId,
            roomId: RoomId,
            numberNight: numberNight,
            statutOrder: "NOK",
        }
        //save into LS

        ordersTab.push(order);
        localStorage.setItem('orders', JSON.stringify(ordersTab));
        //update stock after reservation
        var roomsTab = getFromLs('rooms');
        for (var i = 0; i < roomsTab.length; i++) {
            if (roomsTab[i].id == RoomId) {
                roomsTab[i].numberBed = roomsTab[i].numberBed - Number(numberNight);
                break;
            }
        }
        localStorage.setItem('rooms', JSON.stringify(roomsTab));

        location.replace('basket.html');
    }
    else {
        document.getElementById('numberNightError').innerHTML = "please check number Night unvailable";
        document.getElementById('numberNightError').style.color = "red";
    }
}

function displayMyOrders() {
    var ordersTab = getFromLs('orders');
    var content = '';
    var totalSum = 0;
    var myOrdersTab = [];
    var connectedUserId = localStorage.getItem('connectedUserId')
    for (var i = 0; i < ordersTab.length; i++) {
        if (ordersTab[i].userId == connectedUserId && ordersTab[i].statutOrder == 'ok') {
            myOrdersTab.push(ordersTab[i]);

        }

    }

    for (var i = 0; i < myOrdersTab.length; i++) {

        totalSum = totalSum + myOrdersTab[i].numberNight * searchObj(myOrdersTab[i].roomId, 'rooms').priceRoom;
        content = content + `
    <tr>
                            <td>
                                        <p>${myOrdersTab[i].id}</p>
                            </td>
                            <td>
                            ${searchObj(myOrdersTab[i].userId, 'users').name}
                            </td>
                            <td>
                                
                                ${searchObj(myOrdersTab[i].houseId, 'houses').name}
                               
                            </td>
                            <td>
                                
                                ${searchObj(myOrdersTab[i].roomId, 'rooms').nameRoom}
                               
                            </td>
                            <td>
                                ${searchObj(myOrdersTab[i].roomId, 'rooms').priceRoom}

                            </td>
                            <td>
                                <h5>${myOrdersTab[i].numberNight}</h5>
                            </td>
                            <td>
                                <h5>${myOrdersTab[i].numberNight * searchObj(myOrdersTab[i].roomId, 'rooms').priceRoom}</h5>
                            </td>
                          <td> <button class="btn btn-danger" onclick="deleteOrder(${myOrdersTab[i].id})">Delete</button> </td>
                        </tr>                
    `
    }

    content = content + `TotalSum:${totalSum}`;
    document.getElementById('ordersDiv').innerHTML = content;
}

function deleteOrder(id) {
    var ordersTab = getFromLs('orders');
    var pos = searchOrderPositionById(id);
    var order = searchObj(id, 'orders')
    var rooms = getFromLs('rooms')
    for (var i = 0; i < rooms.length; i++) {
        if (rooms[i].id == id) {
            rooms[i].stock = Number(rooms[i].numberBed) + Number(order.numberNight);
            break;
        }
    }
    ordersTab.splice(pos, 1);
    localStorage.setItem('orders', JSON.stringify(ordersTab));
    localStorage.setItem('rooms', JSON.stringify(rooms));
    location.reload();
}

function searchOrderPositionById(id) {
    var position;
    var ordersTab = getFromLs('orders');
    for (var i = 0; i < ordersTab.length; i++) {
        if (ordersTab[i].id == id) {
            position = i;
            break;
        }
    }
    return position;
}

function displayAdminUsers() {
    var UsersTab = getFromLs('users');
    var content = ``;
    propretiesAndClients = [];
    for (var i = 0; i < UsersTab.length; i++) {
        if ((UsersTab[i].role) == "client" || (UsersTab[i].role) == "proprety") {
            propretiesAndClients.push(UsersTab[i]);
            var isDisplayed = false;
            for (var i = 0; i < propretiesAndClients.length; i++) {
                isDisplayed = (propretiesAndClients[i].role == "proprety" && propretiesAndClients[i].status == 'NOK');
                if (isDisplayed == true) {
                    content = content + `
                        <tr>
                                                     <th scope="col">${propretiesAndClients[i].id}</th>
                                                     <th scope="col">${propretiesAndClients[i].name}</th>
                                                     <th scope="col">${propretiesAndClients[i].email}</th>
                                                     <th scope="col">${propretiesAndClients[i].pwd}</th>
                                                     <th scope="col">${propretiesAndClients[i].tel}</th>
                                                     <th scope="col">${propretiesAndClients[i].role}</th>
                                                     <th scope="col">${propretiesAndClients[i].status}</th>
                                                     <th scope="col"> 
                                                     <button class="btn btn-danger" onclick=DeleteUserByAdmin(${propretiesAndClients[i].id})>Delete</button> 
                                                     <button class="btn btn-warning" onclick=ValidateUserByAdmin(${propretiesAndClients[i].id})>Validate</button>
                                                     </th>
                                                 </tr>
                        `
                }
                else {
                    content = content + `
                        <tr>
                                                     <th scope="col">${propretiesAndClients[i].id}</th>
                                                     <th scope="col">${propretiesAndClients[i].name}</th>
                                                     <th scope="col">${propretiesAndClients[i].email}</th>
                                                     <th scope="col">${propretiesAndClients[i].pwd}</th>
                                                     <th scope="col">${propretiesAndClients[i].tel}</th>
                                                     <th scope="col">${propretiesAndClients[i].role}</th>
                                                     <th scope="col">${propretiesAndClients[i].status}</th>
                                                     <th scope="col"> 
                                                     <button class="btn btn-danger" onclick=DeleteUserByAdmin(${propretiesAndClients[i].id})>Delete</button> 
                                                     </th>
                                                 </tr>
                        `
                }
            }
        }
        document.getElementById('usersAdminDiv').innerHTML = content;
    }
}

function DeleteUserByAdmin(id){
    var users= getFromLs('users');
    var position;
    for (var i = 0; i < users.length; i++) {
if (users[i].id==id) {
    position=i;
    break
}
    }
    users.splice(position,1);
    localStorage.setItem('users',JSON.stringify(users));
    location.reload();


}
function displayAdminHouses() {

    var housesTab = getFromLs('houses');
    var content = ``;
    for (var i = 0; i < housesTab.length; i++) {
        content = content + `
       <tr>
                                    <th scope="col">${housesTab[i].id}</th>
                                    <th scope="col">${housesTab[i].name}</th>
                                    <th scope="col">${housesTab[i].paysHouse}</th>
                                    <th scope="col">${housesTab[i].capacityHouse}</th>
                                    <th scope="col">${housesTab[i].nbreRoom}</th>
                                    <th scope="col">${housesTab[i].nbreBathroom}</th>
                                    <th scope="col">
                                    <button class="btn btn-warning" onclick="updateHouseByAdmin(${housesTab[i].id})">Update</button> 
                                    <button class="btn btn-danger" onclick="deleteHouseByAdmin(${i})">Delete</button> 
                                    </th>
         </tr>
       `
    }
    document.getElementById('housesAdminDiv').innerHTML = content;
}


function updateHouseByAdmin(id) {

    var house = searchObj(id, 'houses');


    form = `<div class="col-md-12 form-group">
    <label>Capacity House</label>
    <input type="number" class="form-control"  name="name" id='newCapacity' value=${house.capacityHouse}>
</div>

<div class="col-md-12 form-group">
<label>Number Room</label>

    <input type="number" class="form-control"  name="name" id='newBathroom' value=${house.nbreBathroom} >
</div>
<div class="col-md-12 form-group">
<label>Number Bathroom</label>

    <input type="number" class="form-control"  name="name" id='newRoom' value=${house.nbreRoom} >
</div>
<div class="col-md-12 form-group">
<button type="submit" value="submit" class="primary-btn" onclick="validateHouseEdit(${house.id})">Validate</button>							
</div>`
    document.getElementById('updateHouseId').innerHTML = form;
}


function deleteHouseByAdmin(pos) {
    var housesTab = getFromLs('houses');
    housesTab.splice(pos, 1);
    localStorage.setItem('houses', JSON.stringify(housesTab));
    location.reload();

}

function validateHouseEdit(id) {

    var newCapacity = document.getElementById('newCapacity').value;
    var newBathroom = document.getElementById('newBathroom').value;
    var newRoom = document.getElementById('newRoom').value;
    var housesTab = getFromLs('houses');
    for (var i = 0; i < housesTab.length; i++) {
        if (housesTab[i].id == id) {
            housesTab[i].capacityHouse = newCapacity;
            housesTab[i].nbreRoom = newBathroom;
            housesTab[i].nbreBathroom = newRoom;
            break;
        }
    }
    localStorage.setItem('houses', JSON.stringify(housesTab));
    location.reload();
}
function ValidateUserByAdmin(id) {
    var users = getFromLs('users');
    for (var i = 0; i < users.length; i++) {

        if (users[i].id == id) {
            users[i].status = 'ok';
            break;
        }
    }
    localStorage.setItem('users', JSON.stringify(users));
    location.reload();
}


function displayAdminRooms() {
    var roomsTab = getFromLs('rooms');

    var content = ``;

    //document.getElementById ('nameHouse').innerHTML = searchObj(findedRoom.id,'houses').name;
    for (var i = 0; i < roomsTab.length; i++) {
        content = content + `
       <tr>
                                    <th scope="col">${roomsTab[i].id}</th>
                                    <th scope="col">${searchObj(roomsTab[i].idHouse, 'houses').name}</th>
                                   
                                    <th scope="col">${roomsTab[i].nameRoom}</th>
                                    <th scope="col">${roomsTab[i].priceRoom}</th>
                                    <th scope="col">${roomsTab[i].numberBed}</th>
                                    <th scope="col">
                                    <button class="btn btn-warning" onclick="updateRoomByAdmin(${roomsTab[i].id})">Update</button> 
                                    <button class="btn btn-danger" onclick="deleteRoomByAdmin(${i})">Delete</button> 
                                    </th>
         </tr>
       `
    }
    document.getElementById('roomsAdminDiv').innerHTML = content;
}

function updateRoomByAdmin(id) {

    var room = searchObj(id, 'rooms');


    form = `<div class="col-md-12 form-group">
    <label>Price Room</label>
    <input type="number" class="form-control"  name="name" id='newprice' value=${room.capacityHouse}>
</div>

<div class="col-md-12 form-group">
<label>Nuité Disponible</label>
    <input type="number" class="form-control"  name="name" id='newNight' value=${room.nbreBathroom} >
</div>

<div class="col-md-12 form-group">
<button type="submit" value="submit" class="primary-btn" onclick="validateRoomEdit(${room.id})">Validate</button>							
</div>`
    document.getElementById('updateRoomId').innerHTML = form;
}
function deleteRoomByAdmin(pos) {
    var roomsTab = getFromLs('rooms');
    roomsTab.splice(pos, 1);
    localStorage.setItem('rooms', JSON.stringify(roomsTab));
    location.reload();
}

function validateRoomEdit(id) {

    var newprice = document.getElementById('newprice').value;
    var newNight = document.getElementById('newNight').value;

    var roomsTab = getFromLs('rooms');
    for (var i = 0; i < roomsTab.length; i++) {
        if (roomsTab[i].id == id) {
            roomsTab[i].priceRoom = newprice;
            roomsTab[i].numberBed = newNight;

            break;
        }
    }
    localStorage.setItem('rooms', JSON.stringify(roomsTab));
    location.reload();
}

function displayAllOrders() {
    var ordersTab = getFromLs('orders');
    var content = '';
    var totalSum = 0;

    for (var i = 0; i < ordersTab.length; i++) {
        var idProp = searchObj(ordersTab[i].houseId, 'houses').idProp;
        totalSum = totalSum + ordersTab[i].numberNight * searchObj((ordersTab[i].roomId, 'rooms').priceRoom);
        content = content + `
        <tr>
                                <td>
                                            <p>${ordersTab[i].id}</p>
                                </td>
                                <td>
                                    
                                    ${ordersTab[i].roomId}
                                   
                                </td> 
                                <td>
                                    
                                ${searchObj(ordersTab[i].roomId, 'rooms').nameRoom}
                                   
                                </td> 
                                <td>
                                    
                                    ${searchObj(ordersTab[i].roomId, 'rooms').priceRoom}
                                   
                                </td> 
                                
                                <td>
                                    <h5>${ordersTab[i].numberNight}</h5>
                                </td>
                                <td>
                                    
                                    ${searchObj(ordersTab[i].userId, 'users').name}
                                   
                                </td> 
                                <td>
                             
                                    ${searchObj(idProp, 'users').name}
                                   
                                </td> 
                                <th scope="col">
                                <button class="btn btn-warning")">Update</button> 
                                <button class="btn btn-danger")">Delete</button> 
                                </th>
                            </tr>                 
        `
    }
    document.getElementById('ordersDiv').innerHTML = content;

}

function displayPropHouses() {
    var housesTab = getFromLs('houses');
    var connectedUserId = localStorage.getItem('connectedUserId');
    var myHouses = [];
    for (var i = 0; i < housesTab.length; i++) {
        if (housesTab[i].idProp == connectedUserId) {
            myHouses.push(housesTab[i]);
        }
    }
    var content = ``;
    for (var i = 0; i < myHouses.length; i++) {
        content = content + `
       <tr>
                                    <th scope="col">${myHouses[i].id}</th>
                                    <th scope="col">${myHouses[i].name}</th>
                                    
                                    <th scope="col">${myHouses[i].paysHouse}</th>
                                    <th scope="col">${myHouses[i].capacityHouse}</th>
                                    <th scope="col">${myHouses[i].nbreRoom}</th>
                                    <th scope="col">${myHouses[i].nbreBathroom}</th>
                                    <th scope="col">
                                    <button class="btn btn-warning">Update</button> 
                                    <button class="btn btn-danger">Delete</button> 
                                    </th>
         </tr>
       `

    }
    document.getElementById('housesPropDiv').innerHTML = content;
}


function displayPropRooms() {
    var roomsTab = getFromLs('rooms');
    var connectedUserId = localStorage.getItem('connectedUserId');
    var myRooms = [];
    //    var findedRoom = searchObj(roomsTab[i].idHouse,'houses').idProp;
    for (var i = 0; i < roomsTab.length; i++) {
        if (searchObj(roomsTab[i].idHouse, 'houses').idProp == connectedUserId) {
            myRooms.push(roomsTab[i]);
        }
    }
    var content = ``;
    for (var i = 0; i < myRooms.length; i++) {
        content = content + `
       <tr>
                                    <th scope="col">${myRooms[i].id}</th>

                                    <th scope="col">${myRooms[i].nameRoom}</th>
                                    
                                    <th scope="col">${myRooms[i].priceRoom}</th>
                                    <th scope="col">${myRooms[i].numberBed}</th>
                                    
                                    <th scope="col">
                                    <button class="btn btn-warning">Update</button> 
                                    <button class="btn btn-danger">Delete</button> 
                                    </th>
         </tr>
       `

    }
    document.getElementById('roomsAdminDiv').innerHTML = content;
}


function displayPropOrders() {

    var roomsTab = getFromLs('rooms');
    var connectedUserId = localStorage.getItem('connectedUserId');
    var myrooms = [];
    for (var i = 0; i < roomsTab.length; i++) {
        if (searchObj(roomsTab[i].idHouse, 'houses').idProp == connectedUserId) {
            myrooms.push(roomsTab[i]);
        }
    }
    var ordersTab = getFromLs('orders');
    var myorders = [];
    for (var i = 0; i < myrooms.length; i++) {
        for (var j = 0; j < ordersTab.length; j++) {
            if (myrooms[i].id == ordersTab[j].roomId) {
                myorders.push(ordersTab[j]);
            }
        }
    }
    var content = ``;
    for (var i = 0; i < myorders.length; i++) {
        if (myorders[i].statutOrder == 'NOK') {
            
       
        content = content + `
   <tr>
                                <th scope="col">${myorders[i].id}</th>
                                <th scope="col">${myorders[i].roomId}</th>
                                <th scope="col">${searchObj(myorders[i].roomId, 'rooms').nameRoom}</th>
                                <th scope="col">${searchObj(myorders[i].roomId, 'rooms').priceRoom}</th>
                                <th scope="col">${myorders[i].numberNight}</th>
                                <th scope="col">${searchObj(myorders[i].userId, 'users').name}</th>
                                <th scope="col">${searchObj((searchObj(myorders[i].houseId, 'houses').idProp), 'users').name}</th>
                                <th scope="col">${myorders[i].numberNight * searchObj(myorders[i].roomId,'rooms').priceRoom}</th>
                                <th scope="col">
                                    <button class="btn btn-warning" onclick="ValidateOrderByOwner(${myorders[i].id})">Confirm</button> 
                                     
                                    </th>
     </tr>
   `
    } }
    document.getElementById('ordersPropDiv').innerHTML = content;

}

function generateHeader() {

    var connectedUserId = localStorage.getItem('connectedUserId');
    var content = '';
    var connectedUser = searchObj(connectedUserId, 'users')
    if (connectedUserId) {
        //user is connected


        if (connectedUser.role == "client") {
            content = `<div class="collapse navbar-collapse yamm" id="navigation">
            <div class="button navbar-right">
                <button class="navbar-btn nav-button wow bounceInRight login" onclick=" window.open('login.html')"
                    data-wow-delay="0.4s">Login</button>
                <button class="navbar-btn nav-button wow fadeInRight" onclick=" logout()"
                    data-wow-delay="0.5s">Logout</button>
            </div>
            <ul class="main-nav nav navbar-nav navbar-right">

                <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="index.html">Home</a></li>
                <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="houses.html">Houses</a></li>
                <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="basket.html">My Basket</a></li>
                <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="profile.html">Hello ${connectedUser.name} </a></li>
                <li class="wow fadeInDown" data-wow-delay="0.4s"><a href="contact.html">Contact</a></li>
            </ul>
        </div>
            `
        }


        else if (connectedUser.role == "proprety") {
            content = `<div class="collapse navbar-collapse yamm" id="navigation">
            <div class="button navbar-right">
                <button class="navbar-btn nav-button wow bounceInRight login" onclick=" window.open('login.html')"
                    data-wow-delay="0.4s">Login</button>
                <button class="navbar-btn nav-button wow fadeInRight" onclick=" logout()"
                    data-wow-delay="0.5s">Logout</button>
            </div>
            <ul class="main-nav nav navbar-nav navbar-right">

                <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="index.html">Home</a></li>
                <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="houses.html">Houses</a></li>
                <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="addHouse.html">Add House</a></li>
                <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="addRoom.html">Add Room</a></li>
                <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="owner.html">Propriétaire</a></li>
                <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="profile.html">Hello ${connectedUser.name} </a></li>
                <li class="wow fadeInDown" data-wow-delay="0.4s"><a href="contact.html">Contact</a></li>
            </ul>
        </div>
            `
        }
        else {
            content = `<div class="collapse navbar-collapse yamm" id="navigation">
            <div class="button navbar-right">
                <button class="navbar-btn nav-button wow bounceInRight login" onclick=" window.open('login.html')"
                    data-wow-delay="0.4s">Login</button>
                <button class="navbar-btn nav-button wow fadeInRight" onclick=" logout()"
                    data-wow-delay="0.5s">Logout</button>
            </div>
            <ul class="main-nav nav navbar-nav navbar-right">

                <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="index.html">Home</a></li>
                <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="houses.html">Houses</a></li>
                <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="admin.html">Admin</a></li>
                <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="profile.html">Hello ${connectedUser.name} </a></li>
                <li class="wow fadeInDown" data-wow-delay="0.4s"><a href="contact.html">Contact</a></li>
            </ul>
        </div>
            `
        }
    }
    else {
        //user not connected
        content = `<div class="collapse navbar-collapse yamm" id="navigation">
        <div class="button navbar-right">
            <button class="navbar-btn nav-button wow bounceInRight login" onclick=" window.open('login.html')"
                data-wow-delay="0.4s">Login</button>
            <button class="navbar-btn nav-button wow fadeInRight" onclick=" logout()"
                data-wow-delay="0.5s">Logout</button>
        </div>
        <ul class="main-nav nav navbar-nav navbar-right">

            <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="index.html">Home</a></li>
            <li class="wow fadeInDown" data-wow-delay="0.1s"><a class="" href="houses.html">Houses</a></li>
            
            <li class="wow fadeInDown" data-wow-delay="0.4s"><a href="contact.html">Contact</a></li>
        </ul>
        <li class="">Are you a <a class="wow fadeInDown" href="signupClient.html">Client</a> or <a class="" href="signupProprety.html">Propriétaire</a>?</li>
    </div>
        `
    }
    document.getElementById('headerId').innerHTML = content;

}


function logout() {
    localStorage.removeItem('connectedUserId');
    location.replace('index.html');
}

function ValidateOrderByOwner(id) {
    var orders = getFromLs('orders');
    for (var i = 0; i < orders.length; i++) {

        if (orders[i].id == id ) {
            orders[i].statutOrder = 'ok';
            
            break;
        }
    }
    localStorage.setItem('orders', JSON.stringify(orders));
    location.reload();
}


function searchHouse() {
var searchValue = document.getElementById('searchHouse').value;
var searchPaysValue = document.getElementById('searchPaysHouse').value;
var findedHouses= [];
var houses= getFromLs('houses');
for (var i = 0; i < houses.length; i++) {
   if (houses[i].name == searchValue  || houses[i].paysHouse == searchPaysValue) {
    
    findedHouses.push(houses[i]);
   }  
}
var content='';
for (var i = 0; i < findedHouses.length; i++) {
   content=content+`
   <div id="list-type" class="proerty-th" style="margin-left: 100px;">
                            <div class="col-sm-6 col-md-4 p0">
                                <div class="box-two proerty-item">
                                    <div class="item-thumb">
                                        <a href=""><img src="assets/img/demo/property-${i + 1}.jpg"></a>
                                    </div>
                                    <div class="item-entry overflow">
                                        <h5><a href=""> ${findedHouses[i].name} </a></h5>
                                        <div class="dot-hr"></div>
                                        <span class="pull-left" style="color: black;"><b>Pays</b> ${findedHouses[i].paysHouse} </span>
                                        <span class="proerty-price pull-right"></span>
                                        
                                        <div class="property-icon" style="color: black;">
                                            <img src="assets/img/icon/bed.png"> ${findedHouses[i].nbreRoom}
                                            <img src="assets/img/icon/shawer.png"> ${findedHouses[i].nbreBathroom}
                                            <button class="btn btn-primary" style="margin-left: 150px;" onclick="goToDisplayHouse(${findedHouses[i].id})">Display</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

   `
    
}

document.getElementById("searchDiv").innerHTML= content;

}




