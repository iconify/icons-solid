import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cibteacux.css';
import '../../css/w/wka1jds2j.css';
import '../../css/s/svuwxjwlv.css';
import '../../css/m/m5va3vbvn.css';
import '../../css/q/q9g973o7j.css';
import '../../css/z/z-wcyc-ii.css';
import '../../css/c/cdga-bc6c.css';
import '../../css/g/gdk1yvbvd.css';
import '../../css/o/oyi-z_9lv.css';
import '../../css/z/zbe8-7llw.css';
import '../../css/l/lcjzx1_qc.css';
import '../../css/o/ov22q0b5g.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="cibteacux"/><path class="wka1jds2j"/><path class="svuwxjwlv"/><path class="m5va3vbvn"/><path class="q9g973o7j"/><path class="z-wcyc-ii"/><path class="cdga-bc6c"/><path class="gdk1yvbvd"/><path class="oyi-z_9lv"/><path class="zbe8-7llw"/><path class="lcjzx1_qc"/><path class="ov22q0b5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:books"} {...others} />);
}

export default Component;
