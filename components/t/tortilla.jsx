import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pg2srv-uh.css';
import '../../css/c/c4v83cb5w.css';
import '../../css/b/bqjzlrb8m.css';
import '../../css/i/i6kuee79v.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="pg2srv-uh"/><path class="c4v83cb5w"/><path class="bqjzlrb8m"/><path class="i6kuee79v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:tortilla"} {...others} />);
}

export default Component;
