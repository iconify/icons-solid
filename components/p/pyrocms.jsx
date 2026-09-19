import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j01bfxbjr.css';

const viewBox = {"width":642,"height":1025};
const content = `<path class="j01bfxbjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:pyrocms"} {...others} />);
}

export default Component;
