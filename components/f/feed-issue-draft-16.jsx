import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/evc3-36gu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="evc3-36gu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:feed-issue-draft-16"} {...others} />);
}

export default Component;
