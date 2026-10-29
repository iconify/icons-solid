import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/supf3ub8t.css';
import '../../css/x/x7rj2_mok.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/t/tpry8yblv.css';
import '../../css/z/z4x45gbzd.css';
import '../../css/w/wcx4jtb-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="supf3ub8t wm-deco"/><path class="wm-deco x7rj2_mok"/><path class="sdaucgb_l wm-deco"/><path class="tpry8yblv wm-k"/><path class="wm-a z4x45gbzd"/><path class="wcx4jtb-e wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:flame-blueprint"} {...others} />);
}

export default Component;
