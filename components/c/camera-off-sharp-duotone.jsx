import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/k22l5nm1h.css';
import '../../css/u/uwftcyb8e.css';
import '../../css/v/v8h5vrbeb.css';
import '../../css/y/ysqxkebtz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="k22l5nm1h"/><path class="uwftcyb8e"/><path class="v8h5vrbeb"/><path class="ysqxkebtz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:camera-off-sharp-duotone"} {...others} />);
}

export default Component;
