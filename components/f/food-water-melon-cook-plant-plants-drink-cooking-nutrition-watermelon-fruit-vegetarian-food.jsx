import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jfizd9rkn.css';
import '../../css/h/hqk_ihb6n.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="jfizd9rkn"/><path class="hqk_ihb6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:food-water-melon-cook-plant-plants-drink-cooking-nutrition-watermelon-fruit-vegetarian-food"} {...others} />);
}

export default Component;
