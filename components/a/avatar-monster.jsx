import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/klh-up_ri.css';
import '../../css/y/y5fyjsb_p.css';
import '../../css/p/pfflpcbkb.css';
import '../../css/l/lks9sub9w.css';
import '../../css/u/ulmodiksv.css';
import '../../css/e/ecs_t0pta.css';
import '../../css/h/hoo95tb1o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="klh-up_ri wm-shadow"/><path class="y5fyjsb_p"/><path class="pfflpcbkb"/><path class="lks9sub9w"/><path class="ulmodiksv"/><path class="ecs_t0pta"/><path class="hoo95tb1o wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-monster"} {...others} />);
}

export default Component;
