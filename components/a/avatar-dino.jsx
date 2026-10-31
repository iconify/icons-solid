import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/s/sdmk2jc_t.css';
import '../../css/w/w0-k8hr9h.css';
import '../../css/s/sqkf6otwe.css';
import '../../css/x/xwz-f8btr.css';
import '../../css/x/xscv3fulc.css';
import '../../css/z/zeqfvey6m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGbOsjoDnr" x1="9.25" x2="15.25" y1="1.76" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGbOsjoDnr)" class="sdmk2jc_t"/><path class="w0-k8hr9h wm-shine"/><path class="sqkf6otwe wm-shine"/><path class="wm-shine xwz-f8btr"/><path class="wm-shine xscv3fulc"/><path class="wm-shine zeqfvey6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:avatar-dino"} {...others} />);
}

export default Component;
