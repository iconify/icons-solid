import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_raf5bng.css';
import '../../css/g/gv2jg9b1e.css';
import '../../css/h/h57s2o_aw.css';
import '../../css/w/wirx-vw_t.css';
import '../../css/d/dt4ifxbxr.css';
import '../../css/d/d-1bj9mxq.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/q/q9q3peckd.css';
import '../../css/i/ilxd_fp_b.css';
import '../../css/l/lqke8manv.css';
import '../../css/n/nxvx1klrg.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="e_raf5bng"><circle class="gv2jg9b1e"/><path class="h57s2o_aw"/><path class="wirx-vw_t"/><path class="dt4ifxbxr"/></g><circle class="d-1bj9mxq"/><g class="brzn_0bpr"><circle class="q9q3peckd"/><circle class="ilxd_fp_b"/><path class="lqke8manv"/><path class="nxvx1klrg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-bouncing-ball-dark-skin-tone"} {...others} />);
}

export default Component;
