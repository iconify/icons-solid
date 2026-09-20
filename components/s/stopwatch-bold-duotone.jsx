import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v3e_w0bfi.css';
import '../../css/o/o2kzpwbuq.css';
import '../../css/t/tz6w_ozgi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="v3e_w0bfi"/><path class="o2kzpwbuq"/><path class="tz6w_ozgi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stopwatch-bold-duotone"} {...others} />);
}

export default Component;
