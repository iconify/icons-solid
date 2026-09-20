import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/x/xyjtgccot.css';
import '../../css/m/m085am6mn.css';
import '../../css/z/zggrtcb-t.css';
import '../../css/w/wkx3sacdr.css';
import '../../css/b/b5kk84i8x.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g class="xyjtgccot"><path class="m085am6mn"/><path clip-rule="evenodd" class="zggrtcb-t"/></g><path clip-rule="evenodd" class="wkx3sacdr"/><path clip-rule="evenodd" class="b5kk84i8x"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:tablet-circle-off"} {...others} />);
}

export default Component;
