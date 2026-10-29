import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/y0vmptb0n.css';
import '../../css/x/x2ge19bep.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/y/yz9dgdb2w.css';
import '../../css/y/y6uo44bde.css';
import '../../css/q/qhjzhbb4m.css';
import '../../css/v/vr57sgb0t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco y0vmptb0n"/><path class="wm-deco x2ge19bep"/><path class="o7-ag87sb wm-deco"/><path class="wm-k yz9dgdb2w"/><path class="wm-a y6uo44bde"/><path class="qhjzhbb4m wm-k"/><path class="vr57sgb0t wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:diya-blueprint"} {...others} />);
}

export default Component;
