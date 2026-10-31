import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/j/jyimdybbv.css';
import '../../css/f/fhj5-ybhc.css';
import '../../css/r/rsjheic4a.css';
import '../../css/a/aj64oob9a.css';
import '../../css/m/mwkqdwhte.css';
import '../../css/p/pkci37bot.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGfcXDTb2L" x1="9" x2="15" y1="1.51" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGfcXDTb2L)" class="jyimdybbv"/><path class="fhj5-ybhc wm-shine"/><path class="rsjheic4a wm-shine"/><path class="aj64oob9a wm-shine"/><path class="mwkqdwhte wm-shine"/><path class="pkci37bot wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:navigation-2"} {...others} />);
}

export default Component;
