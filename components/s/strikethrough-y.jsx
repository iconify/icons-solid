import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w0inoxbwh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w0inoxbwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:strikethrough-y"} {...others} />);
}

export default Component;
