import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/krnf_lb1i.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/y/yngdrubjf.css';
import '../../css/g/gf2eq-byc.css';
import '../../css/w/wizruzb9t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="krnf_lb1i wm-deco"/><path class="sdaucgb_l wm-deco"/><path class="wm-k yngdrubjf"/><path class="gf2eq-byc wm-k"/><path class="wizruzb9t wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-boy-blueprint"} {...others} />);
}

export default Component;
