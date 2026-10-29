import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jqli3mklm.css';
import '../../css/l/lxpri_bqt.css';
import '../../css/t/tjv5j8beb.css';
import '../../css/s/sk0v_5xji.css';
import '../../css/m/m9k_sbbre.css';
import '../../css/k/kav4-2bxk.css';
import '../../css/o/owpe-rbjq.css';
import '../../css/b/bpqeh3bkv.css';
import '../../css/v/v3q_7pb9f.css';
import '../../css/k/k08rlbcdy.css';
import '../../css/h/h7_ia0btc.css';
import '../../css/t/t79m77bmj.css';
import '../../css/n/nwjio54vu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jqli3mklm wm-a"/><path class="lxpri_bqt wm-a"/><path class="tjv5j8beb wm-a"/><path class="sk0v_5xji wm-k"/><path class="m9k_sbbre wm-k"/><path class="kav4-2bxk wm-k"/><path class="owpe-rbjq wm-k"/><path class="bpqeh3bkv wm-k"/><path class="v3q_7pb9f wm-k"/><path class="k08rlbcdy wm-shine"/><path class="h7_ia0btc wm-k"/><path class="t79m77bmj wm-k"/><path class="nwjio54vu wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:umbrella"} {...others} />);
}

export default Component;
