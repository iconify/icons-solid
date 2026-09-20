import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y9j2q5k-h.css';
import '../../css/d/dzevycbzt.css';
import '../../css/t/tz6w_ozgi.css';
import '../../css/v/v3e_w0bfi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="y9j2q5k-h"/><path class="dzevycbzt"/><path class="tz6w_ozgi"/><path class="v3e_w0bfi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stopwatch-pause-bold-duotone"} {...others} />);
}

export default Component;
