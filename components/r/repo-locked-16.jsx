import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rl4-efmll.css';
import '../../css/u/ux165acwl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rl4-efmll"/><path class="ux165acwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:repo-locked-16"} {...others} />);
}

export default Component;
