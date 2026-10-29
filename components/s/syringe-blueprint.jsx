import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hc8q8z2_n.css';
import '../../css/d/dtuegcb8d.css';
import '../../css/k/kjq7-eber.css';
import '../../css/i/ie7dk7eoe.css';
import '../../css/x/xut5pihik.css';
import '../../css/f/fl3akxugr.css';
import '../../css/q/qgv8j_ekg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="hc8q8z2_n wm-deco"/><path class="dtuegcb8d wm-deco"/><path class="kjq7-eber wm-deco"/><path class="ie7dk7eoe wm-k"/><path class="wm-a xut5pihik"/><path class="fl3akxugr wm-k"/><path class="qgv8j_ekg wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:syringe-blueprint"} {...others} />);
}

export default Component;
