import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/x/xyjtgccot.css';
import '../../css/b/bky-e3b6g.css';
import '../../css/q/qxg5kdp0w.css';
import '../../css/f/fkld7zbfi.css';
import '../../css/q/qm7n8pb-t.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g class="xyjtgccot"><path class="bky-e3b6g"/><path clip-rule="evenodd" class="qxg5kdp0w"/></g><path clip-rule="evenodd" class="fkld7zbfi"/><path clip-rule="evenodd" class="qm7n8pb-t"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:comet-circle-off"} {...others} />);
}

export default Component;
