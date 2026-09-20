import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/cdi5j99db.css';
import '../../css/a/analfc2ut.css';
import '../../css/h/hl03b8bpk.css';
import '../../css/f/f11zee_rp.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="cdi5j99db"/><path class="analfc2ut"/><path class="hl03b8bpk"/><path class="f11zee_rp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:call-in-2"} {...others} />);
}

export default Component;
