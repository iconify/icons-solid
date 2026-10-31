import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oz-4qr16w.css';
import '../../css/c/cf71cvbio.css';
import '../../css/r/rdt2wbbwh.css';
import '../../css/u/uenazj_ef.css';
import '../../css/v/vr8bj7bbn.css';
import '../../css/c/cx-y3d-nn.css';
import '../../css/g/gy3r4pbls.css';
import '../../css/q/qr_wpfblc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oz-4qr16w wm-k"/><path class="cf71cvbio wm-s"/><path class="rdt2wbbwh wm-deco"/><path class="uenazj_ef wm-k"/><path class="vr8bj7bbn wm-s"/><path class="cx-y3d-nn wm-shadow"/><path class="gy3r4pbls wm-shine"/><path class="qr_wpfblc wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:moon-star"} {...others} />);
}

export default Component;
