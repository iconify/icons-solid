import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o9hwbmhtt.css';
import '../../css/c/clck4pe0j.css';
import '../../css/q/qn9sgbspu.css';
import '../../css/q/q4jpy_boi.css';
import '../../css/c/cauh1jtih.css';
import '../../css/q/qjwjsqp_p.css';
import '../../css/f/f4lf8jp_a.css';
import '../../css/n/ntxctfb-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o9hwbmhtt wm-k"/><path class="clck4pe0j wm-s"/><path class="qn9sgbspu wm-k"/><path class="q4jpy_boi wm-k"/><path class="cauh1jtih wm-s"/><path class="qjwjsqp_p wm-shadow"/><path class="f4lf8jp_a wm-shine"/><path class="ntxctfb-e wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:server-cog"} {...others} />);
}

export default Component;
