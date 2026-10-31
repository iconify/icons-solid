import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/e/e520uypfq.css';
import '../../css/i/iu2dt3b7t.css';
import '../../css/t/tpkh_j2kt.css';
import '../../css/d/djrnbmbdi.css';
import '../../css/s/swkctlb9x.css';
import '../../css/e/e5t5j33_q.css';
import '../../css/z/zoctaccxe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGn12SaeCO" x1="10" x2="14" y1="1.01" y2="23" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="e520uypfq wm-k"/><path class="iu2dt3b7t wm-deco"/><path class="tpkh_j2kt wm-k"/><path fill="url(#SVGn12SaeCO)" class="djrnbmbdi wm-k"/><path class="swkctlb9x wm-shadow"/><path class="e5t5j33_q wm-shine"/><path class="wm-shine zoctaccxe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:badge-x"} {...others} />);
}

export default Component;
