import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vywim1bhw.css';
import '../../css/b/btr15ibli.css';
import '../../css/l/laha_xb_b.css';
import '../../css/d/d-vh3-pat.css';
import '../../css/i/iyddsfksf.css';
import '../../css/o/olpciwlbb.css';
import '../../css/z/zaofa-9ru.css';
import '../../css/y/ynnxizqrl.css';
import '../../css/k/kjrhk4s6f.css';
import '../../css/u/uqj349byz.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="bi12bsetm"><path class="vywim1bhw"/><path class="btr15ibli"/><path class="laha_xb_b"/><path class="d-vh3-pat"/><path class="iyddsfksf"/><path class="olpciwlbb"/><path class="zaofa-9ru"/><path class="ynnxizqrl"/><path class="kjrhk4s6f"/><path class="uqj349byz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:mz"} {...others} />);
}

export default Component;
