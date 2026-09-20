import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/p2cye_bni.css';
import '../../css/f/frp-jmyed.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="p2cye_bni"/><path class="frp-jmyed"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:food-drinks-teapot-tea-pot-drink-hot-herb"} {...others} />);
}

export default Component;
