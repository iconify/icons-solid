import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/j7gwv8bmj.css';
import '../../css/v/v-09a-beq.css';
import '../../css/j/jqr8ne24y.css';
import '../../css/i/i9rgmobgb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="j7gwv8bmj wm-deco"/><path class="v-09a-beq wm-deco"/><path class="jqr8ne24y wm-k"/><path class="i9rgmobgb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:badge-alert-blueprint"} {...others} />);
}

export default Component;
