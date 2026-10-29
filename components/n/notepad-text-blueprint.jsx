import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/m6u5yxbxj.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/b/bhiae9bke.css';
import '../../css/f/fd6pd66bu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="m6u5yxbxj wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="bhiae9bke wm-k"/><path class="fd6pd66bu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:notepad-text-blueprint"} {...others} />);
}

export default Component;
