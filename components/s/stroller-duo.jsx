import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jg1xwubns.css';
import '../../css/l/ltqp_jhgw.css';
import '../../css/t/t_ugpp72a.css';
import '../../css/w/wfupqcc6c.css';
import '../../css/m/mw1sz56dh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jg1xwubns"/><path class="ltqp_jhgw wm-a"/><path class="t_ugpp72a"/><path class="wfupqcc6c wm-a"/><path class="mw1sz56dh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:stroller-duo"} {...others} />);
}

export default Component;
