import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xw_8a_bev.css';
import '../../css/y/yy7ebmbtq.css';
import '../../css/x/xqhvklbax.css';
import '../../css/w/wk-5s4dqe.css';
import '../../css/y/ykxwtsotg.css';
import '../../css/l/lsrbffp6k.css';
import '../../css/j/jg14e_b3k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xw_8a_bev"/><path class="yy7ebmbtq"/><path class="xqhvklbax"/><path class="wk-5s4dqe"/><path class="ykxwtsotg"/><path class="lsrbffp6k"/><path class="jg14e_b3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:pizza"} {...others} />);
}

export default Component;
