import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/ebr59ccqo.css';
import '../../css/g/gr8j_-b9u.css';
import '../../css/g/gscg7-bcz.css';
import '../../css/c/c_731wbxt.css';
import '../../css/k/khp2kp0jx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="ebr59ccqo"/><path class="gr8j_-b9u"/><path class="gscg7-bcz"/><path class="c_731wbxt"/><path class="khp2kp0jx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:calendar-check"} {...others} />);
}

export default Component;
