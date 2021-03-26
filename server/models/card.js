const mongoose = require('mongoose');

const { Schema } = mongoose;

const CardSchema = new Schema({
  title: {
    type: String,
    required: [true, 'The Card must have a title'],
  },
  description: String,
  labels: [{ type: String }],
  listId: { type: Schema.Types.ObjectId, ref: 'List', required: [true, 'The card must belong to a list'] },
  boardId: { type: Schema.Types.ObjectId, ref: 'Board', required: [true, 'The card must belong to a board'] },
  position: Number,
  archived: Boolean,
  dueDate: Date,
  completed: Boolean,
  comments: [{ type: String }], // add comments schema later
  actions: [
    {
      _id: Number,
      description: String,
      createdAt: Date,
      updatedAt: Date,
      cardId: Number,
    },
  ],
  versionKey: false,
}, { timestamps: true });

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;
