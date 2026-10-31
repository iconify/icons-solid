import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/i/ikf90pbpb.css';
import '../../css/b/b0o_pdb3s.css';
import '../../css/h/hz_b1sb2j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGAs0lfctR" x1="8.7" x2="14.7" y1="2.23" y2="22.37" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGAs0lfctR)" class="ikf90pbpb"/><path class="b0o_pdb3s wm-a"/><path class="hz_b1sb2j wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:screwdriver"} {...others} />);
}

export default Component;
