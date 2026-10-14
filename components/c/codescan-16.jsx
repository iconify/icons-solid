import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3kcy-bcr.css';
import '../../css/u/uqoc3xb4b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="r3kcy-bcr"/><path class="uqoc3xb4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:codescan-16"} {...others} />);
}

export default Component;
