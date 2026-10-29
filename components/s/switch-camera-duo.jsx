import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n10sul64d.css';
import '../../css/n/n_bx2obur.css';
import '../../css/p/psnkz2bcb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="n10sul64d"/><path class="n_bx2obur wm-a"/><path class="psnkz2bcb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:switch-camera-duo"} {...others} />);
}

export default Component;
