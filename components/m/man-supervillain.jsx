import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qtafv-b3b.css';
import '../../css/v/veq9n-bol.css';
import '../../css/m/m08rv52hn.css';
import '../../css/c/c05rt3s_i.css';
import '../../css/c/caetembdt.css';
import '../../css/w/w-ydgabdf.css';
import '../../css/e/elzji7rlw.css';
import '../../css/z/zd0wmkbtd.css';
import '../../css/l/lslfvpb1s.css';
import '../../css/k/kxu_1resb.css';
import '../../css/p/plxancoxr.css';
import '../../css/u/u9p3ufb4q.css';
import '../../css/w/wsb0_bibj.css';
import '../../css/v/vj5psu_di.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="qtafv-b3b"/><path class="veq9n-bol"/><path class="m08rv52hn"/><path class="c05rt3s_i"/><path class="caetembdt"/><path class="w-ydgabdf"/><path class="elzji7rlw"/><path class="zd0wmkbtd"/><path class="lslfvpb1s"/><path class="kxu_1resb"/><path class="plxancoxr"/><path class="u9p3ufb4q"/><path class="wsb0_bibj"/><path class="vj5psu_di"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:man-supervillain"} {...others} />);
}

export default Component;
