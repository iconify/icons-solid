import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lythdhbow.css';
import '../../css/f/f4kf9cc7v.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="lythdhbow"/><path class="f4kf9cc7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:chat-dot-square"} {...others} />);
}

export default Component;
