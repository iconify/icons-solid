import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rv-13e87k.css';
import '../../css/q/qwi1hwboz.css';
import '../../css/z/z5zyu7r_r.css';
import '../../css/l/la9yisbne.css';
import '../../css/n/n4g95lbob.css';
import '../../css/h/h2md0663h.css';
import '../../css/r/rxgadacpg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="rv-13e87k"/><path class="qwi1hwboz"/><path class="z5zyu7r_r"/><path class="la9yisbne"/><path class="n4g95lbob"/><path class="h2md0663h"/><path class="rxgadacpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hospital-bed"} {...others} />);
}

export default Component;
