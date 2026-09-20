import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/aoal70b6v.css';
import '../../css/y/ycfh6nbib.css';
import '../../css/c/czbbm17fv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="aoal70b6v"/><path class="ycfh6nbib"/><path class="czbbm17fv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:shopping-cart-sharp-fill"} {...others} />);
}

export default Component;
