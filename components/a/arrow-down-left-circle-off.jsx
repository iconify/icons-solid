import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/l/lz7vv_bax.css';
import '../../css/x/xry79ibfo.css';
import '../../css/h/h03g1ssvs.css';
import '../../css/z/z93oqzhwa.css';
import '../../css/q/qra9urbgq.css';
import '../../css/a/am6c66wmk.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g clip-rule="evenodd" class="d2kvgvbvc"><g class="xyjtgccot"><path class="lz7vv_bax"/><path class="xry79ibfo"/><path class="h03g1ssvs"/></g><path class="z93oqzhwa"/><path class="qra9urbgq"/><path class="am6c66wmk"/></g><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:arrow-down-left-circle-off"} {...others} />);
}

export default Component;
