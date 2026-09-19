import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/chl3e-b8j.css';

const viewBox = {"width":504,"height":400};
const content = `<path class="chl3e-b8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:network-wifi-outline"} {...others} />);
}

export default Component;
