import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ej_5n-b7k.css';
import '../../css/s/s17kxubxz.css';
import '../../css/u/u00ey8bps.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ej_5n-b7k"/><path class="s17kxubxz"/><circle class="u00ey8bps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:letter-unread-broken"} {...others} />);
}

export default Component;
