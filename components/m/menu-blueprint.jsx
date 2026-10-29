import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bxl18ejyf.css';
import '../../css/w/wn-115bic.css';
import '../../css/k/kty6k6b5v.css';
import '../../css/d/dj8foab4p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="bxl18ejyf wm-deco"/><path class="wm-deco wn-115bic"/><path class="kty6k6b5v"/><path class="dj8foab4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:menu-blueprint"} {...others} />);
}

export default Component;
