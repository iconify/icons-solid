import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/idv0xeg7q.css';
import '../../css/o/odkrajbjk.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/j/j06zh6vfz.css';
import '../../css/w/wyt9irbkv.css';
import '../../css/n/ndwp04m_t.css';
import '../../css/h/h1yu4hbyz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="idv0xeg7q wm-deco"/><path class="odkrajbjk wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="j06zh6vfz wm-k"/><path class="wm-a wyt9irbkv"/><path class="ndwp04m_t wm-k"/><path class="h1yu4hbyz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:trees-blueprint"} {...others} />);
}

export default Component;
