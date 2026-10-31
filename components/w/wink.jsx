import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hl7-q1gvd.css';
import '../../css/u/u6ywz3ney.css';
import '../../css/h/hzcrzjbra.css';
import '../../css/j/jui93hb1h.css';
import '../../css/u/u-kr4uzqq.css';
import '../../css/c/cwlo3zb7m.css';
import '../../css/o/ot6ux_19n.css';
import '../../css/t/t3e6hlbxw.css';
import '../../css/t/tvltouznv.css';
import '../../css/i/ipqd4fblg.css';
import '../../css/r/r1t-trbgz.css';
import '../../css/d/d1vr2ybrz.css';
import '../../css/c/cw1pcz7hv.css';
import '../../css/s/s1zd70evd.css';
import '../../css/q/qkza40j6t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hl7-q1gvd wm-shadow"/><path class="u6ywz3ney wm-k"/><path class="hzcrzjbra wm-k"/><path class="jui93hb1h wm-k"/><path class="u-kr4uzqq wm-k"/><path class="cwlo3zb7m wm-k"/><path class="ot6ux_19n wm-shine"/><path class="t3e6hlbxw wm-a"/><path class="tvltouznv wm-a"/><path class="ipqd4fblg wm-a"/><path class="r1t-trbgz wm-a"/><path class="d1vr2ybrz wm-a"/><path class="cw1pcz7hv wm-a"/><path class="s1zd70evd wm-a"/><path class="qkza40j6t wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:wink"} {...others} />);
}

export default Component;
