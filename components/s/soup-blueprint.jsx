import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/v--mbnbrz.css';
import '../../css/s/sp5333bfs.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/u/u62usgb_g.css';
import '../../css/g/g0jhk334h.css';
import '../../css/s/swjvgl4kp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="v--mbnbrz wm-deco"/><path class="sp5333bfs wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="u62usgb_g wm-k"/><path class="g0jhk334h wm-a"/><path class="swjvgl4kp wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:soup-blueprint"} {...others} />);
}

export default Component;
