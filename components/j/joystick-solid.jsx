import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/twadonbqo.css';
import '../../css/u/umps_z5qj.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="twadonbqo"/><path class="umps_z5qj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:joystick-solid"} {...others} />);
}

export default Component;
