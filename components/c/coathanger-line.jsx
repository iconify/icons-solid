import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zh_9m3lpb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zh_9m3lpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:coathanger-line"} {...others} />);
}

export default Component;
