import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u00ey8bps.css';
import '../../css/y/ynz9_ybsk.css';
import '../../css/j/jpdqneb7h.css';
import '../../css/b/be57zfbjy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="u00ey8bps"/><path class="ynz9_ybsk"/><path class="jpdqneb7h"/><path class="be57zfbjy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notification-unread-lines-broken"} {...others} />);
}

export default Component;
