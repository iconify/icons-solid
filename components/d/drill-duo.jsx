import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jer2xnbeu.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m7qg3-bpx.css';
import '../../css/d/dzqxdrujv.css';
import '../../css/q/qebiyxk2a.css';
import '../../css/l/lbjpe_b5s.css';
import '../../css/e/e7-jbub5h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jer2xnbeu secondary"/><g class="dt0cm9dhy primary"><path class="m7qg3-bpx"/><path class="dzqxdrujv"/><path class="qebiyxk2a"/><path class="lbjpe_b5s"/><path class="e7-jbub5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:drill-duo"} {...others} />);
}

export default Component;
