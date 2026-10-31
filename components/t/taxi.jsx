import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/w/wml-zsbhw.css';
import '../../css/r/r45332bns.css';
import '../../css/c/cna2idbqm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVG1Eyhv5YD" x1="8.99" x2="14.99" y1="2.5" y2="21.75" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG1Eyhv5YD)" class="wml-zsbhw"/><path class="r45332bns wm-a"/><path class="cna2idbqm wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:taxi"} {...others} />);
}

export default Component;
