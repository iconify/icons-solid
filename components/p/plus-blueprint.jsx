import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/mxzs_g6co.css';
import '../../css/b/bd7s4lb_v.css';
import '../../css/n/nh6kcmtjb.css';
import '../../css/t/tv0sudbup.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="mxzs_g6co wm-deco"/><path class="bd7s4lb_v wm-deco"/><path class="nh6kcmtjb"/><path class="tv0sudbup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:plus-blueprint"} {...others} />);
}

export default Component;
