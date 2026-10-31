import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mynqzdq8s.css';
import '../../css/l/lvao53bzn.css';
import '../../css/q/qc_c3bb1d.css';
import '../../css/o/onhvn7bwn.css';
import '../../css/q/qvwpnubvq.css';
import '../../css/p/pepjjkbhc.css';
import '../../css/p/pqbv1pbjk.css';
import '../../css/s/s-2wkcg_a.css';
import '../../css/h/hbb0g1yrn.css';
import '../../css/m/m65ntgb9g.css';
import '../../css/u/ulf40rbar.css';
import '../../css/t/t8rbgsjis.css';
import '../../css/f/fj753fmov.css';
import '../../css/t/t3p4wvc4a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mynqzdq8s wm-k"/><path class="lvao53bzn wm-a"/><path class="qc_c3bb1d wm-deco"/><path class="onhvn7bwn wm-k"/><path class="qvwpnubvq wm-a"/><path class="pepjjkbhc wm-shadow"/><path class="pqbv1pbjk wm-shine"/><path class="s-2wkcg_a wm-shine"/><path class="hbb0g1yrn wm-shine"/><path class="m65ntgb9g wm-shine"/><path class="ulf40rbar wm-a"/><path class="t8rbgsjis wm-a"/><path class="fj753fmov wm-a"/><path class="t3p4wvc4a wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:ice-cream"} {...others} />);
}

export default Component;
