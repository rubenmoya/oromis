module.exports = {
  uuid: (options = {}) => {
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, char => {
      const r = Math.random() * 16 | 0;
      const v = char === 'x' ? r : (r & 3) | 8;
      return v.toString(16);
    });

    return options.uppercase
      ? uuid.toUpperCase()
      : uuid;
  },
};
