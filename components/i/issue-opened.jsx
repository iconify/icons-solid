import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g6f08tbsu.css';

const viewBox = {"width":14,"height":16};
const content = `<path class="g6f08tbsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:issue-opened"} {...others} />);
}

export default Component;
