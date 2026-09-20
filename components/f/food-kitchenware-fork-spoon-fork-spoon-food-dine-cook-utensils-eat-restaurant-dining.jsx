import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/g6ee74ici.css';
import '../../css/d/dr_nuqozz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><ellipse class="g6ee74ici"/><path class="dr_nuqozz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:food-kitchenware-fork-spoon-fork-spoon-food-dine-cook-utensils-eat-restaurant-dining"} {...others} />);
}

export default Component;
