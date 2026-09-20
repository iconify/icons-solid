import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nwghkwnty.css';
import '../../css/q/q00x2qbis.css';
import '../../css/w/wfrztfb4v.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="nwghkwnty"/><rect class="q00x2qbis"/><path class="wfrztfb4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:food-kitchenware-microwave-cook-food-appliances-cooking-nutrition-appliance-microwave"} {...others} />);
}

export default Component;
