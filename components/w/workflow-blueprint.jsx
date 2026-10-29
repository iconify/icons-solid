import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jop2_w7kd.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/j/j69xirswq.css';
import '../../css/y/yrgiqhxka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="jop2_w7kd wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="j69xirswq wm-k"/><path class="wm-a yrgiqhxka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:workflow-blueprint"} {...others} />);
}

export default Component;
