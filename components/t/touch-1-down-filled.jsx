import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rp8-mcbwg.css';
import '../../css/n/nd-6u87gy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rp8-mcbwg"/><path class="nd-6u87gy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:touch-1-down-filled"} {...others} />);
}

export default Component;
