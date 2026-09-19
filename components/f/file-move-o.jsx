import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i66nw380y.css';

const viewBox = {"width":1856,"height":1536};
const content = `<path class="i66nw380y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:file-move-o"} {...others} />);
}

export default Component;
