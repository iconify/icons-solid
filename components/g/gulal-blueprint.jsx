import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/qkol1eb1x.css';
import '../../css/s/sp5333bfs.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/j/jk6f2obya.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="qkol1eb1x wm-deco"/><path class="sp5333bfs wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="jk6f2obya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gulal-blueprint"} {...others} />);
}

export default Component;
