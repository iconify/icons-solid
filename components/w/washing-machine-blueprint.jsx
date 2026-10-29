import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/t00efm1lc.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/l/l62u4yctj.css';
import '../../css/i/i_-ric9xj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="t00efm1lc wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="l62u4yctj wm-k"/><path class="i_-ric9xj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:washing-machine-blueprint"} {...others} />);
}

export default Component;
