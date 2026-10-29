import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/ib2trhlaw.css';
import '../../css/y/yft8yjb6z.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/z/z_q0hqb-j.css';
import '../../css/e/eze2g4blz.css';
import '../../css/o/oabxo120t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ib2trhlaw wm-deco"/><path class="wm-deco yft8yjb6z"/><path class="o7-ag87sb wm-deco"/><path class="wm-k z_q0hqb-j"/><path class="eze2g4blz wm-a"/><path class="oabxo120t wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:helicopter-blueprint"} {...others} />);
}

export default Component;
