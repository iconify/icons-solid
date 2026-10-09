import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/huq5bhbzx.css';
import '../../css/j/javtcmypx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="huq5bhbzx"/><path class="javtcmypx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shipping-container-48-bold"} {...others} />);
}

export default Component;
