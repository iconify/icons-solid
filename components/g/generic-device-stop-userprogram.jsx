import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wstt5lble.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wstt5lble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:generic-device-stop-userprogram"} {...others} />);
}

export default Component;
