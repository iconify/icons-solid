import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/utd2a1e8u.css';
import '../../css/n/neej5ybvl.css';
import '../../css/m/mx_f04b2t.css';
import '../../css/y/y39ff910h.css';
import '../../css/f/f9b4d59gs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="utd2a1e8u wm-deco"/><path class="neej5ybvl wm-deco"/><path class="mx_f04b2t wm-deco"/><path class="wm-k y39ff910h"/><path class="f9b4d59gs wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:filter-x-blueprint"} {...others} />);
}

export default Component;
