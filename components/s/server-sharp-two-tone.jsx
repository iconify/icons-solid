import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/w1wjzmvyb.css';
import '../../css/f/f2kn9ibrb.css';
import '../../css/v/vkkt7ybvn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="w1wjzmvyb"/><path class="f2kn9ibrb"/><path class="vkkt7ybvn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:server-sharp-two-tone"} {...others} />);
}

export default Component;
