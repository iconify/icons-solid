import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qbq5hc8qm.css';
import '../../css/v/va-ew_byd.css';
import '../../css/b/bf-e27ztc.css';
import '../../css/a/a9ke7t7xj.css';
import '../../css/c/c0nql3yzh.css';
import '../../css/k/kw_5mv_mh.css';
import '../../css/s/su47m_k8n.css';
import '../../css/j/jcfsccccf.css';
import '../../css/t/t_4y68b_j.css';
import '../../css/e/ejtiq0bog.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qbq5hc8qm wm-shadow"/><path class="va-ew_byd wm-shadow"/><path class="bf-e27ztc"/><path class="a9ke7t7xj"/><path class="c0nql3yzh"/><path class="kw_5mv_mh"/><path class="su47m_k8n"/><path class="jcfsccccf wm-shine"/><path class="t_4y68b_j wm-shine"/><path class="ejtiq0bog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:align-left"} {...others} />);
}

export default Component;
