import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vd9kimbsu.css';
import '../../css/r/r0e2nujzx.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/s/sumcvejxs.css';
import '../../css/v/vr57sgb0t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="vd9kimbsu wm-deco"/><path class="r0e2nujzx wm-deco"/><path class="sdaucgb_l wm-deco"/><path class="sumcvejxs"/><path class="vr57sgb0t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:droplet-blueprint"} {...others} />);
}

export default Component;
