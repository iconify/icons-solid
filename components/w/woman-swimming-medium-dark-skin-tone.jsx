import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eztqw9biy.css';
import '../../css/c/c_mm67w9u.css';
import '../../css/o/oa6ev-b6d.css';
import '../../css/p/p3tqp8bvt.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/b/b_r-507tg.css';
import '../../css/y/y0sk7pbrk.css';
import '../../css/i/ijdsekb1m.css';
import '../../css/j/jc6g5n8nu.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="eztqw9biy"><circle class="c_mm67w9u"/><path class="oa6ev-b6d"/></g><path class="p3tqp8bvt"/><g class="brzn_0bpr"><path class="b_r-507tg"/><path class="y0sk7pbrk"/><circle class="ijdsekb1m"/><path class="jc6g5n8nu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-swimming-medium-dark-skin-tone"} {...others} />);
}

export default Component;
