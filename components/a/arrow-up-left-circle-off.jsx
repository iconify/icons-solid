import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/i/i9gdjn-sm.css';
import '../../css/u/u64vtzb6o.css';
import '../../css/d/d7yom7bws.css';
import '../../css/n/n0r0a7bqi.css';
import '../../css/p/pog0si8pj.css';
import '../../css/m/mmhjxdbkm.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g clip-rule="evenodd" class="d2kvgvbvc"><g class="xyjtgccot"><path class="i9gdjn-sm"/><path class="u64vtzb6o"/><path class="d7yom7bws"/></g><path class="n0r0a7bqi"/><path class="pog0si8pj"/><path class="mmhjxdbkm"/></g><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:arrow-up-left-circle-off"} {...others} />);
}

export default Component;
