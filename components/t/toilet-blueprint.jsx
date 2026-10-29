import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/tbwg8yj8j.css';
import '../../css/l/lhfk1jb7g.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/o/oxp2msbkr.css';
import '../../css/z/z93dh598w.css';
import '../../css/d/ds34yo22m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="tbwg8yj8j wm-deco"/><path class="lhfk1jb7g wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="oxp2msbkr wm-k"/><path class="wm-a z93dh598w"/><path class="ds34yo22m wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:toilet-blueprint"} {...others} />);
}

export default Component;
