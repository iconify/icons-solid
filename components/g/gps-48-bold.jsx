import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qtgmy3b7z.css';
import '../../css/h/hodl4aclm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qtgmy3b7z"/><path class="hodl4aclm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gps-48-bold"} {...others} />);
}

export default Component;
