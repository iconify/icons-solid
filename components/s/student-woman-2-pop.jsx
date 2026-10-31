import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h71ionbqe.css';
import '../../css/g/g-ocibcyo.css';
import '../../css/l/lxnioprxm.css';
import '../../css/q/qh811_b7n.css';
import '../../css/m/m7gzzebzt.css';
import '../../css/l/lklqr09ej.css';
import '../../css/o/obh_zck3i.css';
import '../../css/i/i4a2ejbfn.css';
import '../../css/e/e3fmb9b1s.css';
import '../../css/r/ra3w6u1-w.css';
import '../../css/v/vt2jc4gkl.css';
import '../../css/h/hgpx06dwg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="h71ionbqe"/><path class="g-ocibcyo"/><path class="lxnioprxm"/><path clip-rule="evenodd" class="qh811_b7n"/><path class="m7gzzebzt"/><path class="lklqr09ej"/><path class="obh_zck3i"/><path class="i4a2ejbfn"/><path class="e3fmb9b1s"/><path class="ra3w6u1-w"/><path clip-rule="evenodd" class="vt2jc4gkl"/><path clip-rule="evenodd" class="hgpx06dwg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:student-woman-2-pop"} {...others} />);
}

export default Component;
