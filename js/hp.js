// about blank
let cfgBlank = document.getElementById("cfgBlank");

cfgBlank.addEventListener("click", function () {
  var win = window.open();
  win.document.body.style.margin = "0";
  win.document.body.style.height = "100vh";
  var frm = win.document.createElement("iframe");
  frm.style.border = "none";
  frm.style.width = "100%";
  frm.style.height = "100%";
  frm.style.margin = "0";
  frm.referrerpolicy = "no-referrer";
  frm.allow = "fullscreen";
  frm.src = "https://dfs3rzq44v6as.cloudfront.net/prxy/";
  win.document.body.appendChild(frm);
});
