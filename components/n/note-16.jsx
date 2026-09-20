import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2d7aoyzr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j2d7aoyzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:note-16"} {...others} />);
}

export default Component;
