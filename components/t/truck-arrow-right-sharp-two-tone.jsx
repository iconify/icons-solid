import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/q-vy7dzjz.css';
import '../../css/l/ldpwx8b8l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="q-vy7dzjz"/><path class="ldpwx8b8l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:truck-arrow-right-sharp-two-tone"} {...others} />);
}

export default Component;
