import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z590d1xpg.css';
import '../../css/u/upv3jq5vz.css';
import '../../css/k/kyv3w0btu.css';
import '../../css/l/lqbbp7g9u.css';
import '../../css/w/wchookbyx.css';
import '../../css/x/xjjsczfem.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z590d1xpg"/><path class="upv3jq5vz"/><path class="kyv3w0btu"/><path class="lqbbp7g9u"/><path class="wchookbyx"/><path class="xjjsczfem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:coffin"} {...others} />);
}

export default Component;
