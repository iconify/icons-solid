import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/e/ekadiyn1t.css';
import '../../css/n/nri0_wbyf.css';
import '../../css/p/p0r1ldbzr.css';
import '../../css/u/uutr7nbdh.css';
import '../../css/w/wj1stmbjh.css';
import '../../css/b/bv2z-gxav.css';
import '../../css/j/jm65m-aey.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGmLM0XcPr" x1="9.97" x2="13.97" y1="1.79" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="ekadiyn1t wm-k"/><path class="nri0_wbyf wm-a"/><path class="p0r1ldbzr wm-deco"/><path class="uutr7nbdh wm-k"/><path fill="url(#SVGmLM0XcPr)" class="wj1stmbjh wm-k"/><path class="bv2z-gxav wm-a"/><path class="jm65m-aey wm-shadow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:telescope"} {...others} />);
}

export default Component;
