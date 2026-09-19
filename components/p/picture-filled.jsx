import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zg5af8b3h.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="zg5af8b3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:picture-filled"} {...others} />);
}

export default Component;
