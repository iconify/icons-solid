import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p0hhklb3f.css';
import '../../css/u/u00ey8bps.css';
import '../../css/y/ynz9_ybsk.css';
import '../../css/j/jpdqneb7h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="p0hhklb3f"/><circle class="u00ey8bps"/><path class="ynz9_ybsk"/><path class="jpdqneb7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notification-unread-lines-line-duotone"} {...others} />);
}

export default Component;
