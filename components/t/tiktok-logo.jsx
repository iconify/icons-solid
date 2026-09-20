import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cbzm_tbxv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cbzm_tbxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:tiktok-logo"} {...others} />);
}

export default Component;
