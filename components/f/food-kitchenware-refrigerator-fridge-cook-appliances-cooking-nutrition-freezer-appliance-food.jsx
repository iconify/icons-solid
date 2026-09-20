import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/ht-5a8k-f.css';
import '../../css/e/egs66zbgb.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="ht-5a8k-f"/><path class="egs66zbgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:food-kitchenware-refrigerator-fridge-cook-appliances-cooking-nutrition-freezer-appliance-food"} {...others} />);
}

export default Component;
