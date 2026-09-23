import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/lb1jov5wm.css';
import '../../css/k/koo-sesdl.css';
import '../../css/q/q4td3mb4p.css';
import '../../css/r/rhu4n0brl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="lb1jov5wm"/><path class="koo-sesdl"/><path class="q4td3mb4p"/><path class="rhu4n0brl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:terminal-sparkles-sharp-duotone"} {...others} />);
}

export default Component;
