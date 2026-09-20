import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt-w9bcpo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dt-w9bcpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:notifications"} {...others} />);
}

export default Component;
