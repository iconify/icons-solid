import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/a/a5_ua3a7c.css';
import '../../css/c/cll9xfbxc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVG5tWhvtsn" x1="9" x2="15" y1="3.5" y2="20.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG5tWhvtsn)" class="a5_ua3a7c"/><path class="cll9xfbxc wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:hard-hat"} {...others} />);
}

export default Component;
