import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/ott3dub1u.css';
import '../../css/e/eb2qabupy.css';
import '../../css/g/g9oyvc35j.css';
import '../../css/y/yln9nzbbc.css';
import '../../css/y/ybxisx4iz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ott3dub1u wm-deco"/><path class="eb2qabupy wm-deco"/><circle class="g9oyvc35j wm-k"/><path class="wm-a yln9nzbbc"/><path class="wm-a ybxisx4iz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rss-blueprint"} {...others} />);
}

export default Component;
