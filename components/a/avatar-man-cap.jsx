import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jgcmc-b8k.css';
import '../../css/m/mk-8t5pjx.css';
import '../../css/k/kpoluktpw.css';
import '../../css/q/qpmkfgmun.css';
import '../../css/q/qo6wucbis.css';
import '../../css/w/w5wn0ubif.css';
import '../../css/j/jnl7webnn.css';
import '../../css/d/dafglku_s.css';
import '../../css/p/p3rithn-j.css';
import '../../css/k/kcmb83bpq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="jgcmc-b8k wm-shadow"/><path class="mk-8t5pjx"/><path class="kpoluktpw"/><path class="qpmkfgmun"/><path class="qo6wucbis"/><path class="w5wn0ubif"/><path class="jnl7webnn"/><path class="dafglku_s wm-shine"/><path class="p3rithn-j wm-shine"/><path class="kcmb83bpq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:avatar-man-cap"} {...others} />);
}

export default Component;
