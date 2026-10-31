import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k32np9szs.css';
import '../../css/x/xi0-2kbdf.css';
import '../../css/r/ri7rkebhg.css';
import '../../css/w/wah1e5bqz.css';
import '../../css/r/rlzwmwbtn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="k32np9szs wm-shadow"/><path class="xi0-2kbdf"/><path class="ri7rkebhg"/><path class="wah1e5bqz"/><path class="rlzwmwbtn wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:mouse-pointer-click"} {...others} />);
}

export default Component;
