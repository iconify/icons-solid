import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qep26ubpg.css';
import '../../css/m/mr_bh9p_g.css';
import '../../css/l/l-va92bog.css';
import '../../css/x/x0eriw50z.css';
import '../../css/t/tc554vbbc.css';
import '../../css/i/imxp_lb0h.css';
import '../../css/a/a4s16fbtp.css';
import '../../css/o/obcve9bjq.css';
import '../../css/b/b4geq6bkd.css';
import '../../css/r/rvvavzbac.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="qep26ubpg"/><path class="mr_bh9p_g"/><path class="l-va92bog"/><path class="x0eriw50z"/><path class="tc554vbbc"/><path clip-rule="evenodd" class="imxp_lb0h"/><path class="a4s16fbtp"/><path class="obcve9bjq"/><path clip-rule="evenodd" class="b4geq6bkd"/><path class="rvvavzbac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:dartboard-pop"} {...others} />);
}

export default Component;
