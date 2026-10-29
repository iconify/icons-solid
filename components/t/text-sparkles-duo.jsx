import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fs5p-d7vq.css';
import '../../css/c/ciui2qe_b.css';
import '../../css/g/gz4rmvf3e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="fs5p-d7vq wm-s"/><path class="ciui2qe_b wm-s"/><path class="gz4rmvf3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:text-sparkles-duo"} {...others} />);
}

export default Component;
