import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/g/g13e6dn6j.css';
import '../../css/q/q6ydr8bza.css';
import '../../css/d/do40yhb0q.css';
import '../../css/q/qtk3p20fq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGws0zwbse" x1="9" x2="15" y1="4" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGws0zwbse)" class="g13e6dn6j"/><path class="q6ydr8bza wm-shine"/><path class="do40yhb0q wm-shine"/><path class="qtk3p20fq wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:baby"} {...others} />);
}

export default Component;
