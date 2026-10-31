import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hl7-q1gvd.css';
import '../../css/l/l54-_cc2m.css';
import '../../css/f/fekfayb9r.css';
import '../../css/w/w1fedzxtp.css';
import '../../css/r/r5kgc1b_j.css';
import '../../css/j/jfwmqt08x.css';
import '../../css/s/sogrr2b2p.css';
import '../../css/t/tlp7z08pf.css';
import '../../css/g/g14ubtbfm.css';
import '../../css/p/ph_obcc3i.css';
import '../../css/a/a_3ruobpn.css';
import '../../css/f/f_pnh_bla.css';
import '../../css/o/oyxzf__9k.css';
import '../../css/v/vh3y-aclx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hl7-q1gvd wm-shadow"/><path class="l54-_cc2m wm-k"/><path class="fekfayb9r wm-k"/><path class="w1fedzxtp wm-k"/><path class="r5kgc1b_j wm-k"/><path class="jfwmqt08x wm-k"/><path class="sogrr2b2p wm-k"/><path class="tlp7z08pf wm-shine"/><path class="g14ubtbfm wm-a"/><path class="ph_obcc3i wm-a"/><path class="a_3ruobpn wm-a"/><path class="f_pnh_bla wm-a"/><path class="oyxzf__9k wm-a"/><path class="vh3y-aclx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:check-circle"} {...others} />);
}

export default Component;
