import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/j/jx6qxhccn.css';
import '../../css/y/yjebktb3k.css';
import '../../css/a/ayp95sytv.css';
import '../../css/s/s2c7e5cvh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGKWDTDdAT" x1="9.5" x2="15.5" y1="2.51" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGKWDTDdAT)" class="jx6qxhccn"/><path class="wm-shine yjebktb3k"/><path class="ayp95sytv wm-shine"/><path class="s2c7e5cvh wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:send-horizontal"} {...others} />);
}

export default Component;
