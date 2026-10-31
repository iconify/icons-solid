import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fnheombab.css';
import '../../css/s/sqhzrz_sh.css';
import '../../css/h/h854ayfro.css';
import '../../css/w/w-t5lhbba.css';
import '../../css/r/rmqebmy1f.css';
import '../../css/r/rnh4fybwa.css';
import '../../css/b/bs1xk8baz.css';
import '../../css/k/k_wvr05bs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="fnheombab wm-shadow"/><path class="sqhzrz_sh"/><path class="h854ayfro"/><path class="w-t5lhbba"/><path class="rmqebmy1f"/><path class="rnh4fybwa"/><path class="bs1xk8baz"/><path class="k_wvr05bs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-man-afro"} {...others} />);
}

export default Component;
