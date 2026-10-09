import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvnxtwbjm.css';
import '../../css/a/aaaysobzh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pvnxtwbjm"/><path class="aaaysobzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:camera-off-48"} {...others} />);
}

export default Component;
