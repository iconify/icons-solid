import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/ce3j81iyt.css';
import '../../css/x/x4oh7ob3p.css';
import '../../css/i/iqg85keyw.css';
import '../../css/b/b67d4zo8u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ce3j81iyt wm-a"/><path class="wm-a x4oh7ob3p"/><path class="iqg85keyw"/><path class="b67d4zo8u wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-gantt-duo"} {...others} />);
}

export default Component;
