import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kbj8nvb7i.css';
import '../../css/p/ptk50absq.css';
import '../../css/n/nboiatbai.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="kbj8nvb7i"/><path class="ptk50absq"/><path class="nboiatbai wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:telescope"} {...others} />);
}

export default Component;
