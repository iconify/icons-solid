import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_raf5bng.css';
import '../../css/a/appa4vbkk.css';
import '../../css/c/cphlw3bxl.css';
import '../../css/n/npdsiub3x.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/q/qd_2r5b_q.css';
import '../../css/s/sbn8ipbbd.css';
import '../../css/e/e1v06gd2w.css';
import '../../css/f/f7-38l-aj.css';
import '../../css/r/roj4wxtdl.css';
import '../../css/i/ih3l101ud.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="e_raf5bng"><circle class="appa4vbkk"/><path class="cphlw3bxl"/></g><path class="npdsiub3x"/><g class="brzn_0bpr"><path class="qd_2r5b_q"/><circle class="sbn8ipbbd"/><circle class="e1v06gd2w"/><circle class="f7-38l-aj"/><path class="roj4wxtdl"/><path class="ih3l101ud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-mountain-biking-dark-skin-tone"} {...others} />);
}

export default Component;
