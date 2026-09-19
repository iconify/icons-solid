import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bjim3yyqp.css';
import '../../css/x/xkbv4mpwl.css';
import '../../css/j/jpebpm_il.css';
import '../../css/k/kfyy3ra1t.css';
import '../../css/i/ijc56abxs.css';
import '../../css/z/z7zuf1-sy.css';
import '../../css/u/utfwol0fc.css';
import '../../css/t/tabcujgzz.css';
import '../../css/d/dl2o_5b7s.css';
import '../../css/k/km4n7obdn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="bjim3yyqp"/><circle class="xkbv4mpwl"/><circle class="jpebpm_il"/><path class="kfyy3ra1t"/><path class="ijc56abxs"/><path class="z7zuf1-sy"/><path class="utfwol0fc"/><path class="tabcujgzz"/><path class="dl2o_5b7s"/><path class="km4n7obdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:railway"} {...others} />);
}

export default Component;
