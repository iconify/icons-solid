import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/g-x4ycb1z.css';
import '../../css/z/zapao2kog.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="g-x4ycb1z"/><path class="zapao2kog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cursor-window-sharp-duotone"} {...others} />);
}

export default Component;
