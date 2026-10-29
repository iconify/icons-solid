import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/nvlzdbb6n.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/f/flyagch6b.css';
import '../../css/v/v3uzkxb0u.css';
import '../../css/h/h14p-zbik.css';
import '../../css/d/d33242b_m.css';
import '../../css/d/d6b7dubbd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="nvlzdbb6n wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="flyagch6b wm-k"/><path class="v3uzkxb0u wm-s"/><path class="h14p-zbik wm-a"/><path class="d33242b_m wm-k"/><path class="d6b7dubbd wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:server-off-blueprint"} {...others} />);
}

export default Component;
