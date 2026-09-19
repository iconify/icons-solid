import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-due_ykv.css';
import '../../css/v/vwfdbyhuu.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="j-due_ykv"/><path class="vwfdbyhuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:copy-document"} {...others} />);
}

export default Component;
