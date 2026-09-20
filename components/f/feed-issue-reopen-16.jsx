import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsk7q2blk.css';

const viewBox = {"width":17,"height":16};
const content = `<path class="tsk7q2blk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:feed-issue-reopen-16"} {...others} />);
}

export default Component;
