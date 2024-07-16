import Joi from 'joi';

const productCreateSchema = Joi.object({
  name: Joi.string().required(),
  category: Joi.string().required(),
  price: Joi.number().required(),
});

export default productCreateSchema;
