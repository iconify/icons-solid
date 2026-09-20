import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3k4mxcjl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j3k4mxcjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:left-square-outline"} {...others} />);
}

export default Component;
