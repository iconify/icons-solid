import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x_-ptj1rw.css';
import '../../css/x/x6dhh7m6p.css';
import '../../css/k/kfw45lpzb.css';
import '../../css/m/mxoc7ebik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-k x_-ptj1rw"/><path class="wm-a x6dhh7m6p"/><path class="kfw45lpzb wm-s"/><path class="mxoc7ebik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:christmas-candle"} {...others} />);
}

export default Component;
