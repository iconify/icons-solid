import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/i8j-tqb2t.css';
import '../../css/i/izg8yvbkw.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/t/t81almqvm.css';
import '../../css/v/v4-vqmvnf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="i8j-tqb2t wm-deco"/><path class="izg8yvbkw wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="t81almqvm wm-k"/><path class="v4-vqmvnf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:timer-blueprint"} {...others} />);
}

export default Component;
