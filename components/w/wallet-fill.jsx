import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivjvz2eii.css';
import '../../css/w/w6s_hllyq.css';
import '../../css/k/kuxqn_r4l.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wcxzdibwu.css';
import '../../css/j/jxh3-wm-c.css';
import '../../css/g/gxh0kblhx.css';
import '../../css/p/pab4h7bqq.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGZ2rvBbZR" width="20" height="14" x="2" y="8" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="w6s_hllyq"/><path class="kuxqn_r4l"/></mask><g class="ft5dv1b6b"><path class="wcxzdibwu"/><path class="jxh3-wm-c"/><path class="gxh0kblhx"/><path mask="url(#SVGZ2rvBbZR)" class="pab4h7bqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:wallet-fill"} {...others} />);
}

export default Component;
