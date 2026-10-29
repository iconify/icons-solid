import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/ufn3m0bhg.css';
import '../../css/r/r89a8rhhw.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/l/lcj2fov3c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ufn3m0bhg wm-deco"/><path class="r89a8rhhw wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="lcj2fov3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heart-gift-blueprint"} {...others} />);
}

export default Component;
