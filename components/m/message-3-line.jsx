import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy-g8lbjc.css';
import '../../css/i/i99p7sv5h.css';
import '../../css/p/p9m9lkbmh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jy-g8lbjc"/><path class="i99p7sv5h"/><path class="p9m9lkbmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:message-3-line"} {...others} />);
}

export default Component;
