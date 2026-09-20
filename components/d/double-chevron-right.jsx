import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nwhfntbgk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nwhfntbgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:double-chevron-right"} {...others} />);
}

export default Component;
