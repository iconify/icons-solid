import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nopz_m_0y.css';
import '../../css/x/xml6ohbwn.css';
import '../../css/o/oc2ejwtsm.css';
import '../../css/f/f-i8s5bhh.css';
import '../../css/b/bizfn3bzp.css';
import '../../css/a/a8h-j0r8f.css';
import '../../css/t/tidf1acix.css';
import '../../css/z/z6i0lzbci.css';
import '../../css/z/zcxcpgnbu.css';
import '../../css/l/l1j41ac6s.css';
import '../../css/u/uc8nime6r.css';
import '../../css/y/yno3-fibc.css';
import '../../css/v/viaezubvn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="nopz_m_0y"/><path class="xml6ohbwn"/><path class="oc2ejwtsm"/><path class="f-i8s5bhh"/><path class="bizfn3bzp"/><path class="a8h-j0r8f"/><path class="tidf1acix"/><path class="z6i0lzbci"/><path class="zcxcpgnbu"/><path class="l1j41ac6s"/><path class="uc8nime6r"/><path class="yno3-fibc"/><path class="viaezubvn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:unicorn"} {...others} />);
}

export default Component;
