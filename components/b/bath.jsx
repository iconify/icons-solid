import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/x/xevtbmkli.css';
import '../../css/m/mcyhv5b_n.css';
import '../../css/n/ndk9-ubxw.css';
import '../../css/q/q38jpubjy.css';
import '../../css/a/apf69icky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGHKCIVc4Y" x1="9.01" x2="15.01" y1="3" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGHKCIVc4Y)" class="xevtbmkli"/><path class="mcyhv5b_n wm-a"/><path class="ndk9-ubxw wm-shine"/><path class="q38jpubjy wm-shine"/><path class="apf69icky wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:bath"} {...others} />);
}

export default Component;
