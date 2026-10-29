import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/kbx02gbvp.css';
import '../../css/v/vu5vvzbot.css';
import '../../css/y/yrdr5wbbm.css';
import '../../css/q/qu1_sqbpg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="kbx02gbvp wm-deco"/><path class="vu5vvzbot wm-deco"/><path class="wm-k yrdr5wbbm"/><path class="qu1_sqbpg wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rectangle-ellipsis-blueprint"} {...others} />);
}

export default Component;
