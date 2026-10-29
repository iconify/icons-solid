import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tczxzd32i.css';
import '../../css/p/p6tq-39gp.css';
import '../../css/f/f0j55xtpw.css';
import '../../css/h/habwvzmiz.css';
import '../../css/n/n1f-t_bnj.css';
import '../../css/w/wsw-7ck3l.css';
import '../../css/v/vlkpm8buk.css';
import '../../css/o/ocottabxe.css';
import '../../css/k/ktedcybaj.css';
import '../../css/d/doovro2xt.css';
import '../../css/u/u_pggfbrm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tczxzd32i wm-k"/><path class="p6tq-39gp wm-k"/><path class="f0j55xtpw wm-k"/><path class="habwvzmiz wm-k"/><path class="n1f-t_bnj wm-k"/><path class="wm-k wsw-7ck3l"/><path class="vlkpm8buk wm-a"/><path class="ocottabxe wm-a"/><path class="ktedcybaj wm-a"/><path class="doovro2xt wm-a"/><path class="u_pggfbrm wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:image"} {...others} />);
}

export default Component;
