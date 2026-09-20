import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/x/xyjtgccot.css';
import '../../css/w/wxbo3ubiq.css';
import '../../css/x/x2hci8bai.css';
import '../../css/h/h6r4jdblr.css';
import '../../css/g/g-492zb_b.css';
import '../../css/j/jkzcixbgu.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g class="xyjtgccot"><path class="wxbo3ubiq"/><path class="x2hci8bai"/><path class="h6r4jdblr"/></g><path class="g-492zb_b"/><path class="jkzcixbgu"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:wifi-circle-off"} {...others} />);
}

export default Component;
