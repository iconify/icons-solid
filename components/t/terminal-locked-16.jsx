import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uyk7o8xin.css';
import '../../css/j/j0z--qb6n.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="uyk7o8xin"/><path class="j0z--qb6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:terminal-locked-16"} {...others} />);
}

export default Component;
