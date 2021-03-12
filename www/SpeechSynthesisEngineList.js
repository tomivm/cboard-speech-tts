
var SpeechSynthesisEngineList = function(data) {
  this._list = data;
  this.length = this._list.length;
};
    
SpeechSynthesisEngineList.prototype.item = function(item) {
    return this._list[item];
};

module.exports = SpeechSynthesisEngineList;