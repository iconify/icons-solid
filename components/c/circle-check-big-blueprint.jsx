import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/ehmz38bwk.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/t/t653i5bar.css';
import '../../css/p/puu63pmkx.css';
import '../../css/f/fp5s2ybam.css';
import '../../css/p/p8dc35b7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ehmz38bwk wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="t653i5bar wm-k"/><path class="puu63pmkx wm-a"/><path class="fp5s2ybam wm-k"/><path class="p8dc35b7q wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:circle-check-big-blueprint"} {...others} />);
}

export default Component;
