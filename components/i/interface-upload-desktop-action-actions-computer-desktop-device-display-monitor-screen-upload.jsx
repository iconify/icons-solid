import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/spo5qbjsj.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="spo5qbjsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-upload-desktop-action-actions-computer-desktop-device-display-monitor-screen-upload"} {...others} />);
}

export default Component;
