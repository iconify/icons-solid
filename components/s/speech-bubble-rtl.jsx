import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-svt8bha.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d-svt8bha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:speech-bubble-rtl"} {...others} />);
}

export default Component;
