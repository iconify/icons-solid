import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bw6fp4b5q.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bw6fp4b5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"quill:inbox-add"} {...others} />);
}

export default Component;
