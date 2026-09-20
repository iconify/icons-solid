import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/goppj6bth.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="goppj6bth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:signal-strength-8"} {...others} />);
}

export default Component;
