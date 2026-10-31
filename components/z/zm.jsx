import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjn0_bbfk.css';
import '../../css/w/wrt906que.css';
import '../../css/h/hma38p_xj.css';
import '../../css/j/jg-acszbq.css';
import '../../css/u/uyc5_2b3u.css';
import '../../css/a/a7myuz4dx.css';
import '../../css/c/c77rfy6sn.css';
import '../../css/l/lptnex8ee.css';
import '../../css/o/outq0ibjx.css';
import '../../css/s/svepa9nve.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="yjn0_bbfk"/><path class="wrt906que"/><path class="hma38p_xj"/><path class="jg-acszbq"/><path class="uyc5_2b3u"/><path class="a7myuz4dx"/><path class="c77rfy6sn"/><path class="lptnex8ee"/><path class="outq0ibjx"/><path class="svepa9nve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:zm"} {...others} />);
}

export default Component;
