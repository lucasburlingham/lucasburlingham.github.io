var count=2;function validate(){for(var e=document.login.username.value,o=document.login.pword.value,n=!1,u="https://simondanerd.github.io/"+e+"/",t=["simonwalker","colinjackson","admin"],a=["simondanerd","colinJ","R!G^10U$"],i=0;i<t.length;i++)if(e==t[i]&&o==a[i]){n=!0;break}if(n)return alert("Login was successful"),window.location=u,!1;var r=" tries";if(1==count&&(r=" try"),!(1<=count))return alert("The information you entered is incorrect! You now have "+count+" more tries left!"),document.login.username.value="No more tries allowed!",document.login.pword.value="",document.login.username.disabled=!0,!(document.login.pword.disabled=!0);alert("Invalid username and/or password. You have "+count+r+" left."),document.login.username.value="",document.login.pword.value="",setTimeout("document.login.username.focus()",25),setTimeout("document.login.username.select()",25),count--}
