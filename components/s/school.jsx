import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/i/i5wkond9e.css';
import '../../css/z/zlhttkfpl.css';
import '../../css/o/oqmmx9bcc.css';
import '../../css/f/f_u55lb2q.css';
import '../../css/p/p672rdzit.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGSG81le3X" x1="9" x2="15" y1="1.51" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGSG81le3X)" class="i5wkond9e"/><path class="wm-a zlhttkfpl"/><path class="oqmmx9bcc wm-shine"/><path class="f_u55lb2q wm-shine"/><path class="p672rdzit wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:school"} {...others} />);
}

export default Component;
