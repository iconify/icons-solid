import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qtafv-b3b.css';
import '../../css/v/veq9n-bol.css';
import '../../css/m/m08rv52hn.css';
import '../../css/c/c05rt3s_i.css';
import '../../css/c/caetembdt.css';
import '../../css/w/w-ydgabdf.css';
import '../../css/o/o8923cx3w.css';
import '../../css/e/e3gvyhbbv.css';
import '../../css/k/krrgjkbzx.css';
import '../../css/k/kxu_1resb.css';
import '../../css/s/s6vdur3-i.css';
import '../../css/n/nlou7vb0s.css';
import '../../css/w/wsb0_bibj.css';
import '../../css/v/vj5psu_di.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="qtafv-b3b"/><path class="veq9n-bol"/><path class="m08rv52hn"/><path class="c05rt3s_i"/><path class="caetembdt"/><path class="w-ydgabdf"/><path class="o8923cx3w"/><path class="e3gvyhbbv"/><path class="krrgjkbzx"/><path class="kxu_1resb"/><path class="s6vdur3-i"/><path class="nlou7vb0s"/><path class="wsb0_bibj"/><path class="vj5psu_di"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:man-supervillain-medium-light"} {...others} />);
}

export default Component;
