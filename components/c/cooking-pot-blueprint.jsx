import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/j4q2u44ul.css';
import '../../css/l/lbaudn5kj.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/n/np-l-tbyw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="j4q2u44ul wm-deco"/><path class="lbaudn5kj wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="np-l-tbyw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cooking-pot-blueprint"} {...others} />);
}

export default Component;
