import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tzeltiq8g.css';
import '../../css/a/a5kojgb5c.css';
import '../../css/u/u00ey8bps.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tzeltiq8g"/><path class="a5kojgb5c"/><circle class="u00ey8bps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-unread-broken"} {...others} />);
}

export default Component;
