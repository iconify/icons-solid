import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/rhy58e22z.css';
import '../../css/s/skl4wi4pq.css';
import '../../css/i/i-cfcdiwd.css';
import '../../css/i/iuoxosbki.css';
import '../../css/q/qlumwsbyb.css';
import '../../css/d/dghrxac-v.css';
import '../../css/i/iia-wlb9p.css';
import '../../css/l/l3aj3w4jd.css';
import '../../css/o/odb4jcbcd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="rhy58e22z wm-shadow"/><path class="skl4wi4pq"/><path class="i-cfcdiwd"/><path class="iuoxosbki"/><path class="qlumwsbyb"/><path class="dghrxac-v"/><path class="iia-wlb9p"/><path class="l3aj3w4jd wm-shine"/><path class="odb4jcbcd wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:bug"} {...others} />);
}

export default Component;
