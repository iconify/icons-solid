import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a3p9-vshh.css';
import '../../css/g/gpj85cb-p.css';
import '../../css/w/wgcybzb0k.css';
import '../../css/r/r7h3wkbmh.css';
import '../../css/o/ootp33bpl.css';
import '../../css/b/bm8cdhhdd.css';
import '../../css/o/ozpv3lmxm.css';
import '../../css/y/yod0pyc5f.css';
import '../../css/q/q2lqayakq.css';
import '../../css/x/xhu_9j_rv.css';
import '../../css/o/ov1lmmxwl.css';

const viewBox = {"width":625,"height":625};
const content = `<g class="cuyn6tgcc"><path class="a3p9-vshh"/><circle class="gpj85cb-p"/><circle class="wgcybzb0k"/><circle class="r7h3wkbmh"/><circle class="ootp33bpl"/><circle class="bm8cdhhdd"/><circle class="ozpv3lmxm"/><circle class="yod0pyc5f"/><path class="q2lqayakq"/><path class="xhu_9j_rv"/><path class="ov1lmmxwl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:keda"} {...others} />);
}

export default Component;
