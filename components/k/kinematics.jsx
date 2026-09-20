import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/irwj-e5bp.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="irwj-e5bp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:kinematics"} {...others} />);
}

export default Component;
