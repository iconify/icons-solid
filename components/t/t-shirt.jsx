import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6bgwhs-n.css';
import '../../css/o/o0acjkeoh.css';
import '../../css/b/bkk6cs9td.css';
import '../../css/w/w-l05plqp.css';
import '../../css/l/les18yejh.css';
import '../../css/e/ep-px_77m.css';
import '../../css/e/e-u6j3amk.css';
import '../../css/f/flcb5lb3w.css';
import '../../css/z/zo_tjjxfa.css';
import '../../css/n/n-98wtnsw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t6bgwhs-n"/><path class="o0acjkeoh"/><path class="bkk6cs9td"/><path class="w-l05plqp"/><path class="les18yejh"/><path class="ep-px_77m"/><path class="e-u6j3amk"/><path class="flcb5lb3w"/><path class="zo_tjjxfa"/><path class="n-98wtnsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:t-shirt"} {...others} />);
}

export default Component;
