import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/s446_nmsp.css';
import '../../css/j/jcsm0pv6v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="s446_nmsp"/><path class="jcsm0pv6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:timer-sharp-two-tone"} {...others} />);
}

export default Component;
