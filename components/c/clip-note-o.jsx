import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dc49rjbhx.css';

const viewBox = {"width":1664,"height":1792};
const content = `<path class="dc49rjbhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:clip-note-o"} {...others} />);
}

export default Component;
