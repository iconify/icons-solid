import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vts8luguz.css';
import '../../css/b/bdh_yppki.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/a/ackqa5buo.css';
import '../../css/y/y72-9g_vl.css';
import '../../css/i/icq14bccv.css';
import '../../css/w/wz_u-4bnl.css';
import '../../css/l/l1u9zcxkl.css';
import '../../css/t/tdspapb3j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGJ0JXObIk" x1="4" x2="12.8" y1="2.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset=".3" class="vts8luguz"/><stop offset="1" class="bdh_yppki"/></linearGradient><linearGradient id="SVGvQI7mdUP" x1="0" x2="0" y1="6.41" y2="9.64" gradientUnits="userSpaceOnUse"><stop offset=".25" class="vc--wpv5i"/><stop offset="1" class="ackqa5buo"/></linearGradient></defs><path class="y72-9g_vl"/><path fill="url(#SVGJ0JXObIk)" class="icq14bccv wm-shine"/><path class="wm-deco wz_u-4bnl"/><path fill="url(#SVGvQI7mdUP)" class="l1u9zcxkl wm-deco"/><path class="tdspapb3j wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-christmas:arrow-down-to-line"} {...others} />);
}

export default Component;
