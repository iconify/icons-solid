import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nkh622bdk.css';
import '../../css/d/dr_tp8gfx.css';
import '../../css/f/fmbkj5b1z.css';
import '../../css/u/ukpz24uxw.css';
import '../../css/t/t5m_lkb7q.css';
import '../../css/q/quwjx5sem.css';
import '../../css/e/ezdeweblf.css';
import '../../css/x/xuhb1jbsz.css';
import '../../css/i/i8zkzbbjy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nkh622bdk"/><path class="dr_tp8gfx"/><path class="fmbkj5b1z"/><path class="ukpz24uxw"/><path class="t5m_lkb7q"/><path class="quwjx5sem"/><path class="ezdeweblf"/><path class="xuhb1jbsz"/><path class="i8zkzbbjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:loudlycrying"} {...others} />);
}

export default Component;
