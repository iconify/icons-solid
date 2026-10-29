import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vp3_m3b5w.css';
import '../../css/s/szt6p5bah.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vp3_m3b5w"/><path class="szt6p5bah wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-video"} {...others} />);
}

export default Component;
