import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gkxbgqb0l.css';
import '../../css/t/tx8onvulw.css';
import '../../css/x/x9a9rzdfe.css';
import '../../css/s/sl2vgvbpb.css';
import '../../css/o/o4y1xcbsa.css';
import '../../css/c/cbbfx_a8m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="gkxbgqb0l wm-shadow"/><path class="tx8onvulw"/><path class="x9a9rzdfe"/><path class="sl2vgvbpb"/><path class="o4y1xcbsa"/><path class="cbbfx_a8m wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:cloud-upload"} {...others} />);
}

export default Component;
