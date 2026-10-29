import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/sk6n57b7v.css';
import '../../css/a/aqc78kpst.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/z/z5ydvbbjm.css';
import '../../css/s/sv8__t8-c.css';
import '../../css/l/l-n171btg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="sk6n57b7v wm-deco"/><path class="aqc78kpst wm-deco"/><path class="sdaucgb_l wm-deco"/><path class="wm-k z5ydvbbjm"/><path class="sv8__t8-c wm-a"/><path class="l-n171btg wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lightbulb-blueprint"} {...others} />);
}

export default Component;
