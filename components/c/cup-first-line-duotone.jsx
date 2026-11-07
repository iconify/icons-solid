import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lfu5k71ri.css';
import '../../css/g/gmoupbb8t.css';
import '../../css/y/yhio252-o.css';
import '../../css/s/snb0d1t5g.css';
import '../../css/j/j17hywdzm.css';
import '../../css/t/t7j-yfbxu.css';
import '../../css/u/u6t8wfbmu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lfu5k71ri"/><path class="gmoupbb8t"/><path class="yhio252-o"/><path class="snb0d1t5g"/><path class="j17hywdzm"/><path class="t7j-yfbxu"/><path class="u6t8wfbmu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cup-first-line-duotone"} {...others} />);
}

export default Component;
