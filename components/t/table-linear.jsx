import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r8vezthtv.css';
import '../../css/k/keqt0zbld.css';
import '../../css/x/x1f4lc3zb.css';
import '../../css/b/b2vvr6bvh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="r8vezthtv"/><path class="keqt0zbld"/><path class="x1f4lc3zb"/><path class="b2vvr6bvh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-linear"} {...others} />);
}

export default Component;
