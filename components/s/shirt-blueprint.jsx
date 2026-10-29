import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/ai9x4vbke.css';
import '../../css/r/rkw4_db5u.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/i/i8sh5v7sp.css';
import '../../css/j/jrzqn48qw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ai9x4vbke wm-deco"/><path class="rkw4_db5u wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="i8sh5v7sp"/><path class="jrzqn48qw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shirt-blueprint"} {...others} />);
}

export default Component;
