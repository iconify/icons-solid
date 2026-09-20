import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/x/xyjtgccot.css';
import '../../css/a/aqkwxab4g.css';
import '../../css/v/v5x930b0u.css';
import '../../css/c/c2xmc696p.css';
import '../../css/l/lpu5gdbsa.css';
import '../../css/e/e67dkccjm.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g class="xyjtgccot"><path class="aqkwxab4g"/><path clip-rule="evenodd" class="v5x930b0u"/></g><path clip-rule="evenodd" class="c2xmc696p"/><path class="lpu5gdbsa"/><path class="e67dkccjm"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:shield-checkered-circle-off"} {...others} />);
}

export default Component;
