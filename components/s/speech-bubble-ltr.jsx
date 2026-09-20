import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h7o1n1z4d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h7o1n1z4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:speech-bubble-ltr"} {...others} />);
}

export default Component;
