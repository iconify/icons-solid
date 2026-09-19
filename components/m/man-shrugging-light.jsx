import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iwy2v7btb.css';
import '../../css/q/qz44d4l4v.css';
import '../../css/n/nojg98bdk.css';
import '../../css/q/qp72tqbie.css';
import '../../css/d/dck10otix.css';
import '../../css/f/ftvxbcbfm.css';
import '../../css/r/rahylum7e.css';
import '../../css/r/r9sdjccwa.css';
import '../../css/f/fjw1x-bgo.css';
import '../../css/b/brzes6jyy.css';
import '../../css/z/z17np0dzs.css';
import '../../css/a/acoqalenk.css';
import '../../css/f/fm_cx1rfg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="iwy2v7btb"/><path class="qz44d4l4v"/><path class="nojg98bdk"/><path class="qp72tqbie"/><path class="dck10otix"/><path class="ftvxbcbfm"/><path class="rahylum7e"/><path class="r9sdjccwa"/><path class="fjw1x-bgo"/><path class="brzes6jyy"/><path class="z17np0dzs"/><path class="acoqalenk"/><path class="fm_cx1rfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:man-shrugging-light"} {...others} />);
}

export default Component;
