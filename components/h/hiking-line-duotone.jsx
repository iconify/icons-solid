import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lgksoiblo.css';
import '../../css/p/p397vciec.css';
import '../../css/r/rt-a0zb8h.css';
import '../../css/c/cu7xy9b9y.css';
import '../../css/t/t1nlz8bqy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="lgksoiblo"/><path class="p397vciec"/><path class="rt-a0zb8h"/><path class="cu7xy9b9y"/><path class="t1nlz8bqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hiking-line-duotone"} {...others} />);
}

export default Component;
