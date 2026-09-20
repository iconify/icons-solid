import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/ryp3spl8y.css';
import '../../css/g/gu2s0cb7j.css';
import '../../css/c/czbbm17fv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="ryp3spl8y"/><path class="gu2s0cb7j"/><path class="czbbm17fv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:shopping-cart-sharp-duotone"} {...others} />);
}

export default Component;
