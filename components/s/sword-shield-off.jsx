import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/t/t0t703r0v.css';
import '../../css/g/g6b42fbgw.css';
import '../../css/w/wclr54b7v.css';
import '../../css/v/vpg95_vmg.css';
import '../../css/v/v-fcr50kl.css';
import '../../css/d/db9k01a_r.css';
import '../../css/d/dq3p6gf8k.css';
import '../../css/w/wle8wlbco.css';
import '../../css/c/c_ph_db-u.css';
import '../../css/o/ovm4ps7vu.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path clip-rule="evenodd" class="t0t703r0v"/><path class="g6b42fbgw"/><path clip-rule="evenodd" class="wclr54b7v"/><path class="vpg95_vmg"/><path clip-rule="evenodd" class="v-fcr50kl"/><path class="db9k01a_r"/><path clip-rule="evenodd" class="dq3p6gf8k"/></g><path clip-rule="evenodd" class="wle8wlbco"/><path clip-rule="evenodd" class="c_ph_db-u"/><path clip-rule="evenodd" class="ovm4ps7vu"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:sword-shield-off"} {...others} />);
}

export default Component;
