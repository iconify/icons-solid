import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/m/mqm36b94x.css';
import '../../css/k/khhs1fbzc.css';
import '../../css/f/f4tgmi8sq.css';
import '../../css/g/gzbg9t7vk.css';
import '../../css/i/i262b8bct.css';
import '../../css/s/sgpshjoxb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGdSVONocx" x1="9" x2="15" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGdSVONocx)" class="mqm36b94x"/><path class="khhs1fbzc wm-shine"/><path class="f4tgmi8sq wm-shine"/><path class="gzbg9t7vk wm-shine"/><path class="i262b8bct wm-shine"/><path class="sgpshjoxb wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:droplet"} {...others} />);
}

export default Component;
