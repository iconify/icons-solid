import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ikjv1wknt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ikjv1wknt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:alarm-clock"} {...others} />);
}

export default Component;
