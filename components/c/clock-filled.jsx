import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yc5ee2brf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yc5ee2brf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:clock-filled"} {...others} />);
}

export default Component;
