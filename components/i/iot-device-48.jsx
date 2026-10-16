import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svwgtwb6l.css';
import '../../css/x/xwg4fnbby.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="svwgtwb6l"/><path class="xwg4fnbby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:iot-device-48"} {...others} />);
}

export default Component;
