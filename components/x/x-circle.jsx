import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z1mxqprbw.css';
import '../../css/d/d5y5s-qsu.css';
import '../../css/t/tpkh_j2kt.css';
import '../../css/k/kz20n3bct.css';
import '../../css/s/sy-g_cckl.css';
import '../../css/z/ze2ps5bam.css';
import '../../css/t/tpl2lf6ja.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k z1mxqprbw"/><path class="d5y5s-qsu wm-deco"/><path class="tpkh_j2kt wm-k"/><path class="kz20n3bct wm-k"/><path class="sy-g_cckl wm-shadow"/><path class="wm-shine ze2ps5bam"/><path class="tpl2lf6ja wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:x-circle"} {...others} />);
}

export default Component;
