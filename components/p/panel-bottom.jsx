import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nq_ys_bwr.css';
import '../../css/j/j6fphobrx.css';
import '../../css/p/p_pv0tb1i.css';
import '../../css/j/jg4go_buj.css';
import '../../css/t/tml76hbcj.css';
import '../../css/l/lc50_yb-m.css';
import '../../css/r/rb1ypbe8f.css';
import '../../css/e/eaq6uabqm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nq_ys_bwr wm-k"/><path class="j6fphobrx wm-k"/><path class="p_pv0tb1i wm-k"/><path class="jg4go_buj wm-k"/><path class="tml76hbcj wm-k"/><path class="lc50_yb-m wm-k"/><path class="rb1ypbe8f wm-shine"/><path class="eaq6uabqm wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:panel-bottom"} {...others} />);
}

export default Component;
