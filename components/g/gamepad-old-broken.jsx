import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fvkw4oiyc.css';
import '../../css/v/v5l5vgbks.css';
import '../../css/k/knx1hwb4l.css';
import '../../css/e/e_un4ubpg.css';
import '../../css/x/xkvin1h0r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fvkw4oiyc"/><path class="v5l5vgbks"/><path class="knx1hwb4l"/><path class="e_un4ubpg"/><path class="xkvin1h0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gamepad-old-broken"} {...others} />);
}

export default Component;
