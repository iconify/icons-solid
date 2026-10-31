import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/w/w2c5hwbzk.css';
import '../../css/p/p4ncm_bpr.css';
import '../../css/i/i81dzjbny.css';
import '../../css/o/ofzqbdb4q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGwEB2rc0x" x1="9.99" x2="13.99" y1="3.52" y2="20" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="w2c5hwbzk wm-k"/><path class="p4ncm_bpr wm-deco"/><path fill="url(#SVGwEB2rc0x)" class="i81dzjbny wm-k"/><path class="ofzqbdb4q wm-shadow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:case-lower"} {...others} />);
}

export default Component;
