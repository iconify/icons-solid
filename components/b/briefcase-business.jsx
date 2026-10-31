import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/ybyfe_bkp.css';
import '../../css/t/teh_stbto.css';
import '../../css/f/f5swmxbze.css';
import '../../css/w/way54qdpb.css';
import '../../css/v/vlbqrnbtg.css';
import '../../css/d/dt-k5e2gd.css';
import '../../css/s/s_xr-tb2h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow ybyfe_bkp"/><path class="teh_stbto"/><path class="f5swmxbze"/><path class="way54qdpb"/><path class="vlbqrnbtg wm-s"/><path class="dt-k5e2gd wm-s"/><path class="s_xr-tb2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:briefcase-business"} {...others} />);
}

export default Component;
