import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j4sttvbdd.css';
import '../../css/f/fly7qfs2z.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="j4sttvbdd"/><path class="fly7qfs2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:chevron-double-up"} {...others} />);
}

export default Component;
