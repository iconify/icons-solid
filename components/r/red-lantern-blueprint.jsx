import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jyuql7bnr.css';
import '../../css/f/fk6-9ho_o.css';
import '../../css/h/h-lozg5_w.css';
import '../../css/i/i38wlgirz.css';
import '../../css/d/dj8l97dto.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="jyuql7bnr wm-deco"/><path class="fk6-9ho_o wm-deco"/><path class="h-lozg5_w wm-deco"/><path class="i38wlgirz wm-k"/><path class="dj8l97dto wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:red-lantern-blueprint"} {...others} />);
}

export default Component;
