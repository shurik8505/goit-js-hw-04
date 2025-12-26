const profile = {
  username: 'Jacob',
  playTime: 300,
};

profile.getInfo = function() {
  return `${this.username} has ${this.playTime} active hours!`;
};

profile.changeUsername = function(newUsername) {
  this.username = newUsername;
};

profile.updatePlayTime = function(additionalHours) {
  this.playTime += additionalHours;
};



console.log(profile.getInfo());

profile.changeUsername("Marco");
console.log(profile.getInfo());

profile.updatePlayTime(20);
console.log(profile.getInfo());