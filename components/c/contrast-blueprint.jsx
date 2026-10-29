import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/i0lc1ab1a.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/n/nko2m3b8f.css';
import '../../css/h/h-w46eb9h.css';
import '../../css/t/tfiky1b5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="i0lc1ab1a wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="nko2m3b8f wm-k"/><path class="h-w46eb9h wm-a"/><path class="tfiky1b5f wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:contrast-blueprint"} {...others} />);
}

export default Component;
