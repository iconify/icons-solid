import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ph8nn-jxn.css';
import '../../css/c/cqcsb4pbk.css';
import '../../css/d/dn36ypasu.css';
import '../../css/m/ml4g5-bth.css';
import '../../css/a/a40dvnfgq.css';
import '../../css/d/dcy9s1m-e.css';
import '../../css/t/t79wo7bha.css';
import '../../css/a/ansu21b_u.css';
import '../../css/q/qchpdkbgx.css';
import '../../css/l/lcg002deg.css';
import '../../css/h/h0wzpp9_k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ph8nn-jxn wm-shadow"/><path class="cqcsb4pbk wm-shadow"/><path class="dn36ypasu"/><path class="ml4g5-bth"/><path class="a40dvnfgq"/><path class="dcy9s1m-e"/><path class="t79wo7bha wm-shine"/><path class="ansu21b_u wm-shine"/><path class="qchpdkbgx"/><path class="lcg002deg"/><path class="h0wzpp9_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:glasses"} {...others} />);
}

export default Component;
