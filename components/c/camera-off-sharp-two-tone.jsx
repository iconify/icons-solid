import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/n-it7vbbk.css';
import '../../css/y/yjcp3vb0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="n-it7vbbk"/><path class="yjcp3vb0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:camera-off-sharp-two-tone"} {...others} />);
}

export default Component;
