import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/ryee2pbxe.css';
import '../../css/h/huiksqehg.css';
import '../../css/t/ty8ph38sn.css';
import '../../css/z/zkgv-lqnl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ryee2pbxe wm-deco"/><path class="huiksqehg wm-deco"/><path class="ty8ph38sn wm-k"/><path class="wm-a zkgv-lqnl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bamboo-blueprint"} {...others} />);
}

export default Component;
