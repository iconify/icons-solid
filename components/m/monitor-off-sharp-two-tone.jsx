import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/kp_7cv0uf.css';
import '../../css/v/vekz44bsy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="kp_7cv0uf"/><path class="vekz44bsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:monitor-off-sharp-two-tone"} {...others} />);
}

export default Component;
