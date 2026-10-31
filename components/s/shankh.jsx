import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/d/dihxxnh7a.css';
import '../../css/j/jn4ebabtj.css';
import '../../css/r/rbqyw63ay.css';
import '../../css/f/fjf1gzb_b.css';
import '../../css/q/qffvwobrj.css';
import '../../css/j/j1vum4b5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGcW5gEdem" x1="8.83" x2="14.83" y1="2.6" y2="21.12" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGcW5gEdem)" class="dihxxnh7a"/><path class="jn4ebabtj wm-shine"/><path class="rbqyw63ay wm-shine"/><path class="fjf1gzb_b wm-shine"/><path class="qffvwobrj wm-shine"/><path class="j1vum4b5i wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:shankh"} {...others} />);
}

export default Component;
