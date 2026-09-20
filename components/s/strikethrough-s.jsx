import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oaay6bb8k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="oaay6bb8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:strikethrough-s"} {...others} />);
}

export default Component;
