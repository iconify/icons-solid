import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eoj0_sxob.css';
import '../../css/v/voqlvbrhf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="eoj0_sxob"/><path class="voqlvbrhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:issue-closed-16"} {...others} />);
}

export default Component;
