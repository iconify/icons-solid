import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hpcowpb6e.css';
import '../../css/q/q7g5d0brm.css';
import '../../css/h/hma38p_xj.css';
import '../../css/q/q4yzhl9sa.css';
import '../../css/d/d7ux6pr_q.css';
import '../../css/e/ef-3b9bib.css';
import '../../css/g/ggv91acnn.css';
import '../../css/i/iohi8v49p.css';
import '../../css/h/hawt4_bml.css';
import '../../css/z/zj6wuk5mt.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="hpcowpb6e"/><path class="q7g5d0brm"/><path class="hma38p_xj"/><path class="q4yzhl9sa"/><path class="d7ux6pr_q"/><path class="ef-3b9bib"/><path class="ggv91acnn"/><path class="iohi8v49p"/><path class="hawt4_bml"/><path class="zj6wuk5mt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:zm"} {...others} />);
}

export default Component;
