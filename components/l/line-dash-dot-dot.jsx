import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hea10li5h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hea10li5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:line-dash-dot-dot"} {...others} />);
}

export default Component;
