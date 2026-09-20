import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nd-3gubon.css';
import '../../css/o/oi9ky1bdz.css';
import '../../css/x/x43s2zn6y.css';
import '../../css/p/pfllnjb4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="nd-3gubon"/><path class="oi9ky1bdz"/><path class="x43s2zn6y"/><path class="pfllnjb4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:alarm-play-line-duotone"} {...others} />);
}

export default Component;
