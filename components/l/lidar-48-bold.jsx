import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9awjfzyj.css';
import '../../css/f/f7niv6bbj.css';
import '../../css/f/figjuehvv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l9awjfzyj"/><path class="f7niv6bbj"/><path class="figjuehvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lidar-48-bold"} {...others} />);
}

export default Component;
