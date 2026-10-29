import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/uk3if241z.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/m/mfr4u0bnw.css';
import '../../css/j/j13_cqbrn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="uk3if241z wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="mfr4u0bnw wm-k"/><path class="j13_cqbrn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:life-buoy-blueprint"} {...others} />);
}

export default Component;
