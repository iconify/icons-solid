import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zafgt3y5u.css';

const viewBox = {"width":32,"height":32};
const content = `<path clip-rule="evenodd" class="zafgt3y5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-red-hair"} {...others} />);
}

export default Component;
