import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/i2koj3lau.css';
import '../../css/q/q_l1jacog.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="i2koj3lau"/><path class="q_l1jacog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:app-dot-sharp-duotone"} {...others} />);
}

export default Component;
