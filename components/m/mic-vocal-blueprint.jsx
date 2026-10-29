import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/z7t14lx3o.css';
import '../../css/m/mqu940bnj.css';
import '../../css/o/ojqi3_b-c.css';
import '../../css/m/mrc0k6b9u.css';
import '../../css/j/j7hpscfgt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco z7t14lx3o"/><path class="mqu940bnj wm-deco"/><path class="ojqi3_b-c wm-deco"/><path class="mrc0k6b9u wm-k"/><path class="j7hpscfgt wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mic-vocal-blueprint"} {...others} />);
}

export default Component;
