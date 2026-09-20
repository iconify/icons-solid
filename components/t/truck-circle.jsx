import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/o/oo_yzmb4t.css';
import '../../css/w/wgoqhkium.css';
import '../../css/g/gjufbsy8v.css';
import '../../css/a/a0gj-nbzv.css';
import '../../css/n/nv-bqkb1x.css';
import '../../css/d/dwbbcobye.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><path clip-rule="evenodd" class="oo_yzmb4t"/><path clip-rule="evenodd" class="wgoqhkium"/><path clip-rule="evenodd" class="gjufbsy8v"/><path class="a0gj-nbzv"/><path clip-rule="evenodd" class="nv-bqkb1x"/><path clip-rule="evenodd" class="dwbbcobye"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:truck-circle"} {...others} />);
}

export default Component;
