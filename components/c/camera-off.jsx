import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/psnkz2bcb.css';
import '../../css/y/yd1-_qbdi.css';
import '../../css/k/kajlvyf4t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="psnkz2bcb"/><path class="wm-a yd1-_qbdi"/><path class="kajlvyf4t wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:camera-off"} {...others} />);
}

export default Component;
