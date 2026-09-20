import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4h395b6q.css';
import '../../css/w/w4luyebbu.css';
import '../../css/e/eun9ccb7s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q4h395b6q"/><path class="w4luyebbu"/><path class="eun9ccb7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:email-mailbox-open"} {...others} />);
}

export default Component;
