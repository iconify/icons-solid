import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qrejsr4gd.css';
import '../../css/t/tsp-8qb6h.css';
import '../../css/k/kzk--rbln.css';
import '../../css/v/v-dbxqgvr.css';
import '../../css/r/rttf-hjhm.css';
import '../../css/b/b1m4-huek.css';
import '../../css/v/vmuu9xbfp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qrejsr4gd wm-k"/><path class="tsp-8qb6h wm-deco"/><path class="kzk--rbln wm-k"/><path class="v-dbxqgvr wm-k"/><path class="rttf-hjhm wm-shadow"/><path class="b1m4-huek wm-shine"/><path class="vmuu9xbfp wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:smartphone"} {...others} />);
}

export default Component;
