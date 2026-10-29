import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vr3h74sgw.css';
import '../../css/r/rajosnf3p.css';
import '../../css/d/db38wxdje.css';
import '../../css/i/ipr557bpu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vr3h74sgw"/><path class="rajosnf3p"/><path class="db38wxdje wm-a"/><path class="ipr557bpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cctv-duo"} {...others} />);
}

export default Component;
