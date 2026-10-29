import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/mh7vulbki.css';
import '../../css/d/dkdaame2f.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/e/eb6gvsk9e.css';
import '../../css/s/sz07cy4fi.css';
import '../../css/n/ne0tdm2tz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="mh7vulbki wm-deco"/><path class="dkdaame2f wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="eb6gvsk9e wm-k"/><path class="sz07cy4fi wm-a"/><path class="ne0tdm2tz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:air-vent-blueprint"} {...others} />);
}

export default Component;
