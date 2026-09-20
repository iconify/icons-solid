import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/k/kwygy8yhq.css';
import '../../css/g/gw1pqjbou.css';
import '../../css/c/c24i1_r7s.css';
import '../../css/q/q2lpa00qg.css';
import '../../css/y/yuqzelzcg.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><path clip-rule="evenodd" class="kwygy8yhq"/><path class="gw1pqjbou"/><path class="c24i1_r7s"/><path class="q2lpa00qg"/><path class="yuqzelzcg"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:angle-down-circle-off"} {...others} />);
}

export default Component;
