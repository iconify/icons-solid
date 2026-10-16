import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vxwuhsbvz.css';
import '../../css/n/nif5jyb9e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vxwuhsbvz"/><path class="nif5jyb9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-speaker-48"} {...others} />);
}

export default Component;
