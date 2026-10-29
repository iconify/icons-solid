import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jeip7fs_w.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/i/in7om8b0h.css';
import '../../css/h/hkcj5-bst.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="jeip7fs_w wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="in7om8b0h wm-k"/><path class="hkcj5-bst wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tablet-blueprint"} {...others} />);
}

export default Component;
