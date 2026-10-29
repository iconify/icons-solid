import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j6ag4ubvz.css';
import '../../css/j/jtnva-biu.css';
import '../../css/v/v5n0s08fy.css';
import '../../css/o/ononpzbzj.css';
import '../../css/b/b0prs61bi.css';
import '../../css/v/vxpf6_kso.css';
import '../../css/k/kimdk-mpq.css';
import '../../css/c/ccjia7bmn.css';
import '../../css/r/ri6y_e4oh.css';
import '../../css/m/mvmud3bcm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j6ag4ubvz wm-shadow"/><path class="jtnva-biu wm-shadow"/><path class="v5n0s08fy"/><path class="ononpzbzj"/><path class="b0prs61bi"/><path class="vxpf6_kso"/><path class="kimdk-mpq"/><path class="ccjia7bmn wm-shine"/><path class="ri6y_e4oh wm-shine"/><path class="mvmud3bcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:wrap-text"} {...others} />);
}

export default Component;
