import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8f9qnbrn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i8f9qnbrn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:repo-template-16"} {...others} />);
}

export default Component;
