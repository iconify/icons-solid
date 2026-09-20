import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/q-vy7dzjz.css';
import '../../css/m/mmzdc10sc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="q-vy7dzjz"/><path class="mmzdc10sc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:truck-plus-sharp-two-tone"} {...others} />);
}

export default Component;
