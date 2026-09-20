import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy-g8lbjc.css';
import '../../css/t/tykix6bve.css';
import '../../css/p/p9m9lkbmh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jy-g8lbjc"/><path class="tykix6bve"/><path class="p9m9lkbmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:message-1-line"} {...others} />);
}

export default Component;
