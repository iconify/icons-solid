import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/stp-vrqms.css';
import '../../css/j/jsxbtwbof.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="stp-vrqms"/><path class="jsxbtwbof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:comfyui"} {...others} />);
}

export default Component;
