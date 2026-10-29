import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/s0swfsbrw.css';
import '../../css/s/sp5333bfs.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/z/zjyeipdew.css';
import '../../css/g/gpzkjz08t.css';
import '../../css/m/musmhrbxe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="s0swfsbrw wm-deco"/><path class="sp5333bfs wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="wm-k zjyeipdew"/><path class="gpzkjz08t wm-a"/><path class="musmhrbxe wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:jack-o-lantern-blueprint"} {...others} />);
}

export default Component;
