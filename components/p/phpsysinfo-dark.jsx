import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iivk5q4jp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iivk5q4jp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:phpsysinfo-dark"} {...others} />);
}

export default Component;
