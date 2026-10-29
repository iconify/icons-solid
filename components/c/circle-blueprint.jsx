import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/g82uymb2s.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/n/nko2m3b8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="g82uymb2s wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="nko2m3b8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:circle-blueprint"} {...others} />);
}

export default Component;
