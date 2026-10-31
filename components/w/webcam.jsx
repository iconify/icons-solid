import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eqts5kfzl.css';
import '../../css/x/xlvojgncq.css';
import '../../css/p/ps5x-cbxd.css';
import '../../css/u/ufl4x7bsf.css';
import '../../css/k/kzmrn-buz.css';
import '../../css/e/e1ay-82uh.css';
import '../../css/y/yg_lu2b-h.css';
import '../../css/o/oqpn_kbhs.css';
import '../../css/b/b6p482lzy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eqts5kfzl wm-k"/><path class="wm-a xlvojgncq"/><path class="ps5x-cbxd wm-deco"/><path class="ufl4x7bsf wm-k"/><path class="kzmrn-buz wm-k"/><path class="e1ay-82uh wm-a"/><path class="wm-shadow yg_lu2b-h"/><path class="oqpn_kbhs wm-shine"/><path class="b6p482lzy wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:webcam"} {...others} />);
}

export default Component;
