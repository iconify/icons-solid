import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0_q8-y1r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u0_q8-y1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:split-vertically"} {...others} />);
}

export default Component;
