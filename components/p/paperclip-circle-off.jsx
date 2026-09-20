import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/g/gqfd6cxxb.css';
import '../../css/s/s4g2rebse.css';
import '../../css/h/hxpqc3b-g.css';
import '../../css/l/l911jxl-r.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g clip-rule="evenodd" class="d2kvgvbvc"><g class="xyjtgccot"><path class="gqfd6cxxb"/><path class="s4g2rebse"/></g><path class="hxpqc3b-g"/><path class="l911jxl-r"/></g><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:paperclip-circle-off"} {...others} />);
}

export default Component;
