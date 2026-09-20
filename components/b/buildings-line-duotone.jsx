import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xpzbxokqs.css';
import '../../css/k/ktl-r5sov.css';
import '../../css/u/uwhiofy0j.css';
import '../../css/e/ei794fi6p.css';
import '../../css/j/ju0qwccqo.css';
import '../../css/g/g4lmt2dqc.css';
import '../../css/b/bnpvw3beo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xpzbxokqs"/><path class="ktl-r5sov"/><path class="uwhiofy0j"/><path class="ei794fi6p"/><path class="ju0qwccqo"/><path class="g4lmt2dqc"/><path class="bnpvw3beo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:buildings-line-duotone"} {...others} />);
}

export default Component;
