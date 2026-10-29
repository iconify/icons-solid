import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/iy4tz5bpr.css';
import '../../css/k/k_77gmb9u.css';
import '../../css/l/l6x225bcg.css';
import '../../css/s/scgb-sjtz.css';
import '../../css/z/znjji2z4m.css';
import '../../css/y/ywp1uo-iw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="iy4tz5bpr wm-deco"/><path class="k_77gmb9u wm-deco"/><path class="l6x225bcg wm-deco"/><path class="scgb-sjtz wm-k"/><path class="wm-a znjji2z4m"/><path class="wm-a ywp1uo-iw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:black-cat-blueprint"} {...others} />);
}

export default Component;
