import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fg79iebtx.css';
import '../../css/p/pnj4y1nku.css';
import '../../css/y/ybgg7vk0w.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fg79iebtx"/><path class="pnj4y1nku"/><path class="ybgg7vk0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:monster"} {...others} />);
}

export default Component;
