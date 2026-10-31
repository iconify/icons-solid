import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w2drw8bds.css';
import '../../css/y/yc-53hbfw.css';
import '../../css/l/l9cyvdbky.css';
import '../../css/t/tjl9ghw_r.css';
import '../../css/m/m_cqe2bbq.css';
import '../../css/q/q2_buq1wh.css';
import '../../css/b/bpjksdbes.css';
import '../../css/w/wpme-du2i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w2drw8bds wm-k"/><path class="wm-deco yc-53hbfw"/><path class="l9cyvdbky wm-k"/><path class="tjl9ghw_r wm-k"/><path class="m_cqe2bbq wm-shadow"/><path class="q2_buq1wh wm-shine"/><path class="bpjksdbes wm-shine"/><path class="wm-shine wpme-du2i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:message-square-x"} {...others} />);
}

export default Component;
