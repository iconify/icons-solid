import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u99l2yxgv.css';
import '../../css/z/z04drlb1l.css';
import '../../css/i/i650vrpib.css';
import '../../css/e/e0rq2fx8z.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="u99l2yxgv"/><g class="z04drlb1l"><path class="i650vrpib"/><path class="e0rq2fx8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sea-level-rise"} {...others} />);
}

export default Component;
