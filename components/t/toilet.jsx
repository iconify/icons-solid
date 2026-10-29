import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lptx1rgle.css';
import '../../css/z/z93dh598w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="lptx1rgle"/><path class="wm-a z93dh598w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:toilet"} {...others} />);
}

export default Component;
