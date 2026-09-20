import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/t/tzss6nb0u.css';
import '../../css/f/f32bk1bqi.css';
import '../../css/b/bkjhke1-m.css';
import '../../css/u/u7zkrmtua.css';
import '../../css/c/c9mahma2m.css';
import '../../css/b/bkivmy7ha.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g clip-rule="evenodd" class="d2kvgvbvc"><g class="xyjtgccot"><path class="tzss6nb0u"/><path class="f32bk1bqi"/><path class="bkjhke1-m"/></g><path class="u7zkrmtua"/><path class="c9mahma2m"/><path class="bkivmy7ha"/></g><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:arrow-up-right-circle-off"} {...others} />);
}

export default Component;
