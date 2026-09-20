import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oezaxpo8x.css';
import '../../css/g/gfk6kebjy.css';
import '../../css/v/vvptc81kx.css';
import '../../css/e/ecdea3xxa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="oezaxpo8x"/><path class="gfk6kebjy"/><path class="vvptc81kx"/><path class="ecdea3xxa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:unlink-broken"} {...others} />);
}

export default Component;
