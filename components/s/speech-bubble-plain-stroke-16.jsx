import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rcfb_cb7o.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rcfb_cb7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:speech-bubble-plain-stroke-16"} {...others} />);
}

export default Component;
