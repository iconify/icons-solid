import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/v/vi8jaikxg.css';
import '../../css/s/s_e_-ispw.css';
import '../../css/z/z8i_lacac.css';
import '../../css/x/xiqqurrni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGWLyv5bod" x1="9.94" x2="13.94" y1="5.7" y2="18.28" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="vi8jaikxg wm-k"/><path class="s_e_-ispw wm-deco"/><path fill="url(#SVGWLyv5bod)" class="wm-k z8i_lacac"/><path class="wm-shadow xiqqurrni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:rewind"} {...others} />);
}

export default Component;
