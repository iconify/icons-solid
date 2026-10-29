import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nq_ys_bwr.css';
import '../../css/j/j6fphobrx.css';
import '../../css/p/p_pv0tb1i.css';
import '../../css/l/lrsx-lbwx.css';
import '../../css/y/yt_qvebrz.css';
import '../../css/v/vms27ubig.css';
import '../../css/n/n0p9hs58m.css';
import '../../css/z/znm1tcc2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nq_ys_bwr wm-k"/><path class="j6fphobrx wm-k"/><path class="p_pv0tb1i wm-k"/><path class="lrsx-lbwx wm-k"/><path class="wm-k yt_qvebrz"/><path class="vms27ubig wm-k"/><path class="n0p9hs58m wm-shine"/><path class="wm-a znm1tcc2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:sidebar"} {...others} />);
}

export default Component;
