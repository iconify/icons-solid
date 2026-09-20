import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k96n5jw4u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k96n5jw4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:star-cancelled"} {...others} />);
}

export default Component;
