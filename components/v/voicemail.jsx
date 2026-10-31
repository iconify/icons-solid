import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/s/swsu--ltd.css';
import '../../css/v/vmvlg3bcs.css';
import '../../css/c/csnvg1ogi.css';
import '../../css/j/j2-46xbkc.css';
import '../../css/q/qmh70cc6z.css';
import '../../css/t/thvgfxbvc.css';
import '../../css/f/fuq00dc8u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGwTGwjeRx" x1="10" x2="14" y1="7" y2="17" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="swsu--ltd wm-k"/><path class="vmvlg3bcs wm-deco"/><path class="csnvg1ogi wm-k"/><path fill="url(#SVGwTGwjeRx)" class="j2-46xbkc wm-k"/><path class="qmh70cc6z wm-shadow"/><path class="thvgfxbvc wm-shine"/><path class="fuq00dc8u wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:voicemail"} {...others} />);
}

export default Component;
