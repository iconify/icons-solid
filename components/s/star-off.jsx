import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/l/lpvbwcbtn.css';
import '../../css/u/uh6di0wke.css';
import '../../css/m/munlu1bnp.css';
import '../../css/k/k79mop6hk.css';
import '../../css/f/f7v254jae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGUAhYIcti" x1="8.53" x2="14.53" y1="2" y2="22.47" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGUAhYIcti)" class="lpvbwcbtn"/><path class="uh6di0wke wm-s"/><path class="munlu1bnp wm-shine"/><path class="k79mop6hk wm-shine"/><path class="f7v254jae wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:star-off"} {...others} />);
}

export default Component;
