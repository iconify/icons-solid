import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/g2o9psb2z.css';
import '../../css/j/japi10b_l.css';
import '../../css/r/rzg6wsw9q.css';
import '../../css/w/wdtwypbzo.css';
import '../../css/j/j8xs33bul.css';
import '../../css/r/r39t62bxf.css';
import '../../css/j/j1bxmabpn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="g2o9psb2z wm-deco"/><path class="japi10b_l wm-deco"/><path class="rzg6wsw9q wm-deco"/><path class="wdtwypbzo wm-k"/><path class="j8xs33bul wm-a"/><path class="r39t62bxf wm-k"/><path class="j1bxmabpn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:log-in-blueprint"} {...others} />);
}

export default Component;
