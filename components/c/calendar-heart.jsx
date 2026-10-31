import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mk6gam1hl.css';
import '../../css/j/jqhmlbw-b.css';
import '../../css/u/u-3liwbmt.css';
import '../../css/r/rfzyo3btn.css';
import '../../css/l/loqts3cyf.css';
import '../../css/r/r42rf3bcz.css';
import '../../css/n/nlirye16a.css';
import '../../css/g/g48w_hibd.css';
import '../../css/m/mcf0lxsjf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mk6gam1hl wm-k"/><path class="jqhmlbw-b wm-a"/><path class="u-3liwbmt wm-k"/><path class="rfzyo3btn wm-k"/><path class="loqts3cyf wm-a"/><path class="r42rf3bcz wm-shadow"/><path class="nlirye16a wm-shine"/><path class="g48w_hibd wm-shine"/><path class="mcf0lxsjf wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:calendar-heart"} {...others} />);
}

export default Component;
