import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t776lnp7b.css';
import '../../css/z/z3rf84bgx.css';
import '../../css/k/k61rxtjwk.css';
import '../../css/h/h-pfqgbzl.css';
import '../../css/d/dc6exx_io.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="t776lnp7b wm-k"/><path class="wm-a z3rf84bgx"/><path class="k61rxtjwk wm-shadow"/><path class="h-pfqgbzl wm-k"/><path class="dc6exx_io wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:underline-engrave"} {...others} />);
}

export default Component;
