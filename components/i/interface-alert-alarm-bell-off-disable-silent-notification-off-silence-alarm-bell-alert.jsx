import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p30qmac3l.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="p30qmac3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-alert-alarm-bell-off-disable-silent-notification-off-silence-alarm-bell-alert"} {...others} />);
}

export default Component;
