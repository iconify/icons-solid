import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/c/c3vx2_-ba.css';
import '../../css/t/ttaud7vbs.css';
import '../../css/f/fa9fggbuz.css';
import '../../css/u/u6_5w7bao.css';
import '../../css/t/t0z9drtxd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGs7SMzbSE" x1="9.26" x2="15.26" y1="1.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGs7SMzbSE)" class="c3vx2_-ba"/><path class="ttaud7vbs wm-a"/><path class="fa9fggbuz wm-shine"/><path class="u6_5w7bao wm-shine"/><path class="t0z9drtxd wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:lollipop"} {...others} />);
}

export default Component;
