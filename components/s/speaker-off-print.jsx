import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/u/u7s_9vzkd.css';
import '../../css/o/o6l1_m8up.css';
import '../../css/o/o4j5y5e_x.css';
import '../../css/o/o8_eirm0g.css';
import '../../css/w/w1b3o1jpx.css';
import '../../css/s/sq-wjyx-c.css';
import '../../css/f/fws59ee_j.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path clip-rule="evenodd" class="u7s_9vzkd"/><path class="o6l1_m8up"/><path class="o4j5y5e_x"/></g><path clip-rule="evenodd" class="o8_eirm0g"/><path class="w1b3o1jpx"/><path class="sq-wjyx-c"/><path class="fws59ee_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:speaker-off-print"} {...others} />);
}

export default Component;
