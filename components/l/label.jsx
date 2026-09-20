import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/luio64b5z.css';
import '../../css/j/j6ei9utzf.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="luio64b5z"/><path class="j6ei9utzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:label"} {...others} />);
}

export default Component;
