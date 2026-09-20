import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wlfgbb32o.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/n/n92ediatx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wlfgbb32o"/><circle class="h_tsn8bxt"/><path class="n92ediatx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:menu-dots-broken"} {...others} />);
}

export default Component;
