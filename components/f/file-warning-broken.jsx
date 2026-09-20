import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b0v8xi1-v.css';
import '../../css/t/t_r3qbcnu.css';
import '../../css/e/e0cmz0boh.css';
import '../../css/t/t4qaumccy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="b0v8xi1-v"/><path class="t_r3qbcnu"/><path class="e0cmz0boh"/><path class="t4qaumccy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-warning-broken"} {...others} />);
}

export default Component;
