import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wl_zx02mu.css';
import '../../css/t/tjcqu8l6p.css';
import '../../css/d/dzph-dble.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="wl_zx02mu"/><path class="tjcqu8l6p"/><path class="dzph-dble"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:camera-loading"} {...others} />);
}

export default Component;
