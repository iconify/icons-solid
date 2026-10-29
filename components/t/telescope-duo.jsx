import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pqwfdvh6t.css';
import '../../css/b/b0pdi0-3d.css';
import '../../css/n/nboiatbai.css';
import '../../css/k/kbj8nvb7i.css';
import '../../css/p/ptk50absq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="pqwfdvh6t"/><path class="b0pdi0-3d"/><path class="nboiatbai wm-a"/><path class="kbj8nvb7i"/><path class="ptk50absq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:telescope-duo"} {...others} />);
}

export default Component;
