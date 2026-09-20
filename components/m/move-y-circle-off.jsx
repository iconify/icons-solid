import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c0vom0-hm.css';
import '../../css/y/yhsywbcrt.css';
import '../../css/d/d-q7spbap.css';
import '../../css/r/rfwl0qbpy.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="c0vom0-hm"/><path clip-rule="evenodd" class="yhsywbcrt"/><path clip-rule="evenodd" class="d-q7spbap"/><path clip-rule="evenodd" class="rfwl0qbpy"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:move-y-circle-off"} {...others} />);
}

export default Component;
