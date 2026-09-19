import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r46yqn6hu.css';
import '../../css/q/q9z7d06ah.css';
import '../../css/c/ce2nurisz.css';
import '../../css/l/lqlm14brk.css';
import '../../css/e/e9-tt87jp.css';
import '../../css/q/q5sevfbpl.css';
import '../../css/j/j__bvebau.css';
import '../../css/c/cnbeck5xt.css';
import '../../css/o/omi68pbjn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="r46yqn6hu"/><path class="q9z7d06ah"/><path class="ce2nurisz"/><path class="lqlm14brk"/><path class="e9-tt87jp"/><path class="q5sevfbpl"/><path class="j__bvebau"/><path class="cnbeck5xt"/><path class="omi68pbjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:rooster"} {...others} />);
}

export default Component;
