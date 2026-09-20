import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jf15-eblj.css';
import '../../css/m/mdqqvibpr.css';
import '../../css/k/k3jlk7z0w.css';
import '../../css/x/xplddp1hr.css';
import '../../css/h/hxp2vwnvx.css';
import '../../css/t/tnq2v_bwm.css';
import '../../css/r/rx_4racvl.css';
import '../../css/t/tn-rn8bib.css';
import '../../css/o/o7ztbybpe.css';
import '../../css/c/c9aj8wwyl.css';
import '../../css/g/g66vg_p7h.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><path class="jf15-eblj"/><path class="mdqqvibpr"/><path class="k3jlk7z0w"/><path class="xplddp1hr"/><path class="hxp2vwnvx"/><path class="tnq2v_bwm"/><path class="rx_4racvl"/><path class="tn-rn8bib"/><path class="o7ztbybpe"/><path class="c9aj8wwyl"/><path class="g66vg_p7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:science-lab"} {...others} />);
}

export default Component;
