import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdq7pzc7k.css';
import '../../css/o/ov7ogjxth.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fdq7pzc7k"/><path class="ov7ogjxth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:conversation-chat"} {...others} />);
}

export default Component;
