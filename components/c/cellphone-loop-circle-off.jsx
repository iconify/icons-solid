import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/x/xyjtgccot.css';
import '../../css/f/f7mhkjluc.css';
import '../../css/o/of2-9jb3e.css';
import '../../css/p/pg7mk9hxb.css';
import '../../css/f/fw105m0ik.css';
import '../../css/j/j3037bcit.css';
import '../../css/o/os-ibivrc.css';
import '../../css/g/gcjffpk1n.css';
import '../../css/y/y41r9ilfq.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g class="xyjtgccot"><path class="f7mhkjluc"/><path clip-rule="evenodd" class="of2-9jb3e"/><path class="pg7mk9hxb"/><path clip-rule="evenodd" class="fw105m0ik"/></g><path class="j3037bcit"/><path clip-rule="evenodd" class="os-ibivrc"/><path clip-rule="evenodd" class="gcjffpk1n"/><path clip-rule="evenodd" class="y41r9ilfq"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:cellphone-loop-circle-off"} {...others} />);
}

export default Component;
