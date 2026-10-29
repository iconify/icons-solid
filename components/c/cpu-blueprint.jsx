import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/mx878-b0u.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/g/gmt-k0r6b.css';
import '../../css/p/pzj6afbau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="mx878-b0u wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="gmt-k0r6b wm-k"/><path class="pzj6afbau wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cpu-blueprint"} {...others} />);
}

export default Component;
