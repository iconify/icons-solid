import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5ipcjk3w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x5ipcjk3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:lily-pads"} {...others} />);
}

export default Component;
