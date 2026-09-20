import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ask_q2bvx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ask_q2bvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:rotate-90-right"} {...others} />);
}

export default Component;
