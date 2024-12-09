var SiteName=document.getElementById('SiteName');
var SiteURL=document.getElementById('SiteURL');
var tbl=document.getElementById('tbl');
var Sub=document.getElementById('submitBtn');
var siteArr=[];


if(localStorage.getItem('siteArr')!=null){
  siteArr=JSON.parse (localStorage.getItem("siteArr"));
  displaySite(siteArr);
}


function addSite(){
 if(UrlValidation()){
  var SiteObj={
    Name:SiteName.value,
    Url:SiteURL.value,
 
 }
 siteArr.push(SiteObj);
 displaySite(siteArr);
 console.log(siteArr.length)
localStorage.setItem("siteArr",JSON.stringify(siteArr ))
 }
 else{
alert('Site Name or Url is not valid, Please enter the valid Url')
 }
}

function displaySite(arr){
  var pro='';
  for(var i=0; i<arr.length;i++){
    pro +=`     <tr  class="text-center ">
                <td><h6>${i+1}</h6></td>
                <td><h6>${siteArr[i].Name}</h6></td>
                <td><a href="${siteArr[i].Url}" target="_blank" type="button" class="btn btn-warning text-white"><i class="fa-solid fa-eye pe-2"></i> Visit</a></td>
                <td><button onclick="DeleteSite(${i})" type="button" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
              </tr>`
  }
tbl.innerHTML=pro;
}
function DeleteSite(del){
    siteArr.splice(del,1);
    localStorage.setItem("siteArr",JSON.stringify(siteArr )) 
    displaySite(siteArr);
  }

  function UrlValidation(){
    var Regex=/^(http|https):+.+(.com)/;
    if(Regex.test(SiteURL.value)){
      SiteURL.classList.add('is-valid')
      SiteURL.classList.remove('is-invalid')
    return true

    }
    else{
      SiteURL.classList.add('is-invalid')
      SiteURL.classList.remove('is-valid')
      return false
    }
  }