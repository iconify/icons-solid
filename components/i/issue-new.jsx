import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6t-qx8yf.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="j6t-qx8yf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:issue-new"} {...others} />);
}

export default Component;
