import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sylr8tfsk.css';
import '../../css/u/uuss4vdgk.css';
import '../../css/s/s5_1c_bef.css';
import '../../css/g/gngh-tb2h.css';
import '../../css/q/qmphs8b_h.css';
import '../../css/f/fzezpkbuu.css';
import '../../css/h/h1n3j4bvi.css';
import '../../css/t/t2yx6nbzb.css';
import '../../css/u/u5q65byxr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sylr8tfsk wm-shadow"/><path class="uuss4vdgk wm-shadow"/><path class="s5_1c_bef"/><path class="gngh-tb2h"/><path class="qmphs8b_h"/><path class="fzezpkbuu"/><path class="h1n3j4bvi wm-shine"/><path class="t2yx6nbzb wm-shine"/><path class="u5q65byxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:pause"} {...others} />);
}

export default Component;
