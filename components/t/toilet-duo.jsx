import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qpr9qmbkp.css';
import '../../css/o/oniek1b4l.css';
import '../../css/z/z93dh598w.css';
import '../../css/l/lptx1rgle.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="qpr9qmbkp"/><path class="oniek1b4l wm-a"/><path class="wm-a z93dh598w"/><path class="lptx1rgle"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:toilet-duo"} {...others} />);
}

export default Component;
