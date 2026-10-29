import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/qhtoyywdr.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/c/cclrk4bzu.css';
import '../../css/m/mexbxv5go.css';
import '../../css/a/a-yn74bud.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="qhtoyywdr wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="cclrk4bzu wm-k"/><path class="mexbxv5go wm-a"/><path class="a-yn74bud wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:fence-blueprint"} {...others} />);
}

export default Component;
