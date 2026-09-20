import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/yrrwlswyx.css';
import '../../css/i/ic4yjbb7q.css';
import '../../css/e/em-w7qbqn.css';
import '../../css/p/pl-kbmizl.css';
import '../../css/j/jq_-pzbvo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="yrrwlswyx"/><path class="ic4yjbb7q"/><path class="em-w7qbqn"/><path class="pl-kbmizl"/><path class="jq_-pzbvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:lock-comment-security"} {...others} />);
}

export default Component;
