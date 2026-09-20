import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obyc-wpuo.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="obyc-wpuo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-alert-alarm-bell-2-alert-bell-ring-notification-alarm"} {...others} />);
}

export default Component;
