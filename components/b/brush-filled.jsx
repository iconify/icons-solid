import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzqhaxd9h.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="lzqhaxd9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:brush-filled"} {...others} />);
}

export default Component;
