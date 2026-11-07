import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/paayxvxde.css';
import '../../css/l/li3xrhb9c.css';
import '../../css/d/dmzio9b4p.css';
import '../../css/r/rw8hl94tg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="paayxvxde"/><path class="li3xrhb9c"/><path class="dmzio9b4p"/><path class="rw8hl94tg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:book-bookmark-minimalistic-broken"} {...others} />);
}

export default Component;
