import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ucw01obzn.css';
import '../../css/u/uv5ko_w3n.css';
import '../../css/m/mrx9qqwqm.css';
import '../../css/b/bayfp_bpx.css';
import '../../css/q/qn8ydjbjz.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ucw01obzn"/><path clip-rule="evenodd" class="uv5ko_w3n"/><path clip-rule="evenodd" class="mrx9qqwqm"/><path class="bayfp_bpx"/><path clip-rule="evenodd" class="qn8ydjbjz"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:monitor-eye-circle-off"} {...others} />);
}

export default Component;
