import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t403b_11h.css';

const viewBox = {"width":1024,"height":1023};
const content = `<path class="t403b_11h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:flagtriangle"} {...others} />);
}

export default Component;
