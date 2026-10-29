import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/w4i5j1kmr.css';
import '../../css/s/sp5333bfs.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/i/iy7-c-wtc.css';
import '../../css/z/z0orz_bkb.css';
import '../../css/c/cdifo6aqj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="w4i5j1kmr wm-deco"/><path class="sp5333bfs wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="iy7-c-wtc wm-k"/><path class="wm-a z0orz_bkb"/><path class="cdifo6aqj wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bird-blueprint"} {...others} />);
}

export default Component;
