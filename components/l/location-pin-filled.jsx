import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvp_25qpx.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="qvp_25qpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:location-pin-filled"} {...others} />);
}

export default Component;
