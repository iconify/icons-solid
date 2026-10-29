import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/ndmlnv50k.css';
import '../../css/j/jyibtv-4l.css';
import '../../css/w/w1azbvbkb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ndmlnv50k"/><path class="jyibtv-4l"/><path class="w1azbvbkb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bike-duo"} {...others} />);
}

export default Component;
