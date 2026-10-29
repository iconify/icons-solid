import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/iqg85keyw.css';
import '../../css/k/k2jm9_qyv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="iqg85keyw"/><path class="k2jm9_qyv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-gantt"} {...others} />);
}

export default Component;
