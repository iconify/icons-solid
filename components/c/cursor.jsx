import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dkogg394b.css';
import '../../css/f/fhsoj--bi.css';
import '../../css/i/itdrw_7_c.css';
import '../../css/q/qa-1cmbfm.css';
import '../../css/p/pv9inbbkg.css';
import '../../css/k/k9ed1ubxs.css';
import '../../css/z/zo-574i0o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dkogg394b wm-shadow"/><path class="fhsoj--bi wm-k"/><path class="itdrw_7_c wm-k"/><path class="qa-1cmbfm wm-k"/><path class="pv9inbbkg wm-k"/><path class="k9ed1ubxs wm-shine"/><path class="wm-deco zo-574i0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:cursor"} {...others} />);
}

export default Component;
