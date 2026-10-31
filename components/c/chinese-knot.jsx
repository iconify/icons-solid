import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cmsytmbix.css';
import '../../css/i/isyh43lra.css';
import '../../css/z/z_a59wbmq.css';
import '../../css/q/q_lp0ibjp.css';
import '../../css/a/awprtmbww.css';
import '../../css/s/s_-18gdtl.css';
import '../../css/s/susxwdbvr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cmsytmbix wm-k"/><path class="isyh43lra wm-a"/><path class="wm-deco z_a59wbmq"/><path class="q_lp0ibjp wm-k"/><path class="awprtmbww wm-k"/><path class="s_-18gdtl wm-a"/><path class="susxwdbvr wm-shadow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:chinese-knot"} {...others} />);
}

export default Component;
