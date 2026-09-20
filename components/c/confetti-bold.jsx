import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dej851bfe.css';
import '../../css/y/ync39fbpi.css';
import '../../css/x/x--92wq9a.css';
import '../../css/m/m0b-ahaon.css';
import '../../css/m/mqq58umpg.css';
import '../../css/t/tgrdh259d.css';
import '../../css/u/u8tmigbnz.css';
import '../../css/l/lh76btqfj.css';
import '../../css/p/ptenf5bdk.css';
import '../../css/s/ss9mf_bta.css';
import '../../css/e/emapf3cej.css';
import '../../css/s/sinp_lbqz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="dej851bfe"/><path class="ync39fbpi"/><path class="x--92wq9a"/><path class="m0b-ahaon"/><path class="mqq58umpg"/><path class="tgrdh259d"/><path class="u8tmigbnz"/><path class="lh76btqfj"/><path class="ptenf5bdk"/><path class="ss9mf_bta"/><path class="emapf3cej"/><path class="sinp_lbqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:confetti-bold"} {...others} />);
}

export default Component;
