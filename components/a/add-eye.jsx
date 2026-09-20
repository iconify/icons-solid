import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qkxnt0j7u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qkxnt0j7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:add-eye"} {...others} />);
}

export default Component;
