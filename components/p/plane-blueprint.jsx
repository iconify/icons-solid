import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fa02m5btw.css';
import '../../css/s/s60nzevdd.css';
import '../../css/a/aurd6xbhd.css';
import '../../css/t/tygsh6hqg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="fa02m5btw wm-deco"/><path class="s60nzevdd wm-deco"/><path class="aurd6xbhd wm-deco"/><path class="tygsh6hqg wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:plane-blueprint"} {...others} />);
}

export default Component;
