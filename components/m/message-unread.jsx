import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_4rwbbkx.css';
import '../../css/i/iq4t2p2xt.css';
import '../../css/f/fulwhhb_m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="c_4rwbbkx"/><path class="iq4t2p2xt"/><circle class="fulwhhb_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:message-unread"} {...others} />);
}

export default Component;
