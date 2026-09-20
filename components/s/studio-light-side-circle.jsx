import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/x/xyjtgccot.css';
import '../../css/n/ni23het1o.css';
import '../../css/j/jrrlputnm.css';
import '../../css/q/qk-lqcc5d.css';
import '../../css/x/xhzvqabus.css';
import '../../css/n/njsp8q4ba.css';
import '../../css/o/onzw5rx3w.css';
import '../../css/d/d120w4b8a.css';
import '../../css/t/tm9-c6_he.css';
import '../../css/k/knpu4gbqh.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g class="xyjtgccot"><path clip-rule="evenodd" class="ni23het1o"/><path class="jrrlputnm"/><path clip-rule="evenodd" class="qk-lqcc5d"/><path class="xhzvqabus"/><path clip-rule="evenodd" class="njsp8q4ba"/><path clip-rule="evenodd" class="onzw5rx3w"/></g><path clip-rule="evenodd" class="d120w4b8a"/><path clip-rule="evenodd" class="tm9-c6_he"/><path clip-rule="evenodd" class="knpu4gbqh"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:studio-light-side-circle"} {...others} />);
}

export default Component;
