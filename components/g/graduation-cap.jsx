import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q7upkqeon.css';
import '../../css/c/cogu7dnjs.css';
import '../../css/l/lffgxfysq.css';
import '../../css/e/eye2jobaj.css';
import '../../css/o/oupow_rpy.css';
import '../../css/s/sbiirab0z.css';
import '../../css/d/dnmat02fb.css';
import '../../css/a/avxn-ccxt.css';
import '../../css/m/mq8n3fabx.css';
import '../../css/c/ciwxwcbuo.css';
import '../../css/x/x60uiabkc.css';
import '../../css/k/kgiyr9bmd.css';
import '../../css/b/bu9r_obdd.css';
import '../../css/v/v915_75yw.css';
import '../../css/n/n0edfpbvb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q7upkqeon wm-k"/><path class="cogu7dnjs wm-k"/><path class="lffgxfysq wm-k"/><path class="eye2jobaj wm-k"/><path class="oupow_rpy wm-k"/><path class="sbiirab0z wm-k"/><path class="dnmat02fb wm-shine"/><path class="avxn-ccxt wm-a"/><path class="mq8n3fabx wm-a"/><path class="ciwxwcbuo wm-k"/><path class="wm-k x60uiabkc"/><path class="kgiyr9bmd wm-a"/><path class="bu9r_obdd wm-a"/><path class="v915_75yw wm-a"/><path class="n0edfpbvb wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:graduation-cap"} {...others} />);
}

export default Component;
