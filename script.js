function copyToClipboard(){

  var copyText = $("#letterBox div:visible").text().replace(/\t/g,'')
    .replace("unsolicited mail to:", "unsolicited mail to:\n" + getInput("#input-mail"))
    .replace("unsolicited email to:", "unsolicited email to: " + getInput("#input-email"))
    .replace("unsolicited telecommunications to:", "unsolicited telecommunications to: " + getInput("#input-phone"));
  
  copyText += "\nGenerated with OptOutLetter.com";

  function getInput(id){
    if($(id).val()){
      return $(id).val();
    }
    else{
      var placeholderText = "[insert " + $(id).attr("placeholder") + "]";
      return placeholderText.toUpperCase();
    }
  }

  $("#clipboard").val(copyText);

  var copyText = document.getElementById("clipboard");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  $("#copyStatus").fadeIn(100, function() {
    $("#copyStatus").fadeOut(3000);
  });
}