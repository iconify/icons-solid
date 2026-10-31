import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vlbrwcclj.css';
import '../../css/d/dbpuoyzpx.css';
import '../../css/s/s_t_wlb2s.css';
import '../../css/s/s9ujirhuv.css';
import '../../css/o/o79l1hbto.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="vlbrwcclj wm-shadow"/><path class="dbpuoyzpx"/><path class="s_t_wlb2s"/><path class="s9ujirhuv"/><path class="o79l1hbto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:highlighter"} {...others} />);
}

export default Component;
