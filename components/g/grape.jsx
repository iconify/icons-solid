import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pz316c71r.css';
import '../../css/h/hr5gvvb0h.css';
import '../../css/m/mb08_zbkx.css';
import '../../css/r/ry_oy0a3b.css';
import '../../css/a/ag8fmwblh.css';
import '../../css/p/p0o_90bxf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="pz316c71r wm-shadow"/><path class="hr5gvvb0h"/><path class="mb08_zbkx"/><path class="ry_oy0a3b"/><path class="ag8fmwblh"/><path class="p0o_90bxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:grape"} {...others} />);
}

export default Component;
