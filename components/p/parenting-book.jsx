import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ul0vf-b4z.css';
import '../../css/l/ls6jhm6rf.css';
import '../../css/r/rlbpgb1jw.css';
import '../../css/o/or5gtccqr.css';
import '../../css/e/e17q52bva.css';
import '../../css/b/bi9j8ccqq.css';
import '../../css/d/dxpvbvbyu.css';
import '../../css/r/rd_no8yio.css';
import '../../css/r/rca44dkwb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ul0vf-b4z"/><circle class="ls6jhm6rf"/><path class="rlbpgb1jw"/><path class="or5gtccqr"/><path class="e17q52bva"/><path class="bi9j8ccqq"/><circle class="dxpvbvbyu"/><circle class="rd_no8yio"/><path class="rca44dkwb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:parenting-book"} {...others} />);
}

export default Component;
