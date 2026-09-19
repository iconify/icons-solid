import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/ps8qlrbhc.css';
import '../../css/o/o48pqtx0g.css';
import '../../css/e/ehku_zbwp.css';
import '../../css/i/i_5as8b8u.css';
import '../../css/t/t_m6p_8jv.css';
import '../../css/m/mt9smsb3f.css';
import '../../css/e/e2xjhvbcx.css';
import '../../css/c/cw8-5ub8n.css';
import '../../css/v/vh_20vbnl.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="cuyn6tgcc"><rect class="ps8qlrbhc"/><rect class="o48pqtx0g"/><rect class="ehku_zbwp"/><rect class="i_5as8b8u"/><rect class="t_m6p_8jv"/><rect class="mt9smsb3f"/><rect class="e2xjhvbcx"/><rect class="cw8-5ub8n"/><rect class="vh_20vbnl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:grid-3x3-fill-12"} {...others} />);
}

export default Component;
