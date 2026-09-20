import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/g/g8mt1rbaa.css';
import '../../css/k/khiaq02ik.css';
import '../../css/b/boc9s-fhp.css';
import '../../css/b/b4dmablfp.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><path clip-rule="evenodd" class="g8mt1rbaa"/><path class="khiaq02ik"/><path clip-rule="evenodd" class="boc9s-fhp"/><path class="b4dmablfp"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:cart-circle-off"} {...others} />);
}

export default Component;
