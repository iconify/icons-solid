import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wrs2_fwzk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wrs2_fwzk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:attachment-upload"} {...others} />);
}

export default Component;
