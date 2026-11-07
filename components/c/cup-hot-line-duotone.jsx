import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c37ble74i.css';
import '../../css/w/wr9xlc01g.css';
import '../../css/i/iu52w7n7m.css';
import '../../css/l/lqfyrwbgl.css';
import '../../css/h/ht6mdpbgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="c37ble74i"/><path class="wr9xlc01g"/><path class="iu52w7n7m"/><path class="lqfyrwbgl"/><path class="ht6mdpbgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cup-hot-line-duotone"} {...others} />);
}

export default Component;
