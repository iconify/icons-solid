import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/swsj6o8lt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="swsj6o8lt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"quill:folder-todo"} {...others} />);
}

export default Component;
