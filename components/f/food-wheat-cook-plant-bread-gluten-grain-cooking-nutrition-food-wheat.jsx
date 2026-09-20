import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j61_c6bws.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="j61_c6bws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:food-wheat-cook-plant-bread-gluten-grain-cooking-nutrition-food-wheat"} {...others} />);
}

export default Component;
