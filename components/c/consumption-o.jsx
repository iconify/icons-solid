import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jn9fr8b3o.css';
import '../../css/i/i8m7q71ql.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="jn9fr8b3o"/><path class="i8m7q71ql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:consumption-o"} {...others} />);
}

export default Component;
