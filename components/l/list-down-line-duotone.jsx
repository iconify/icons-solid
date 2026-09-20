import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ynnqgt8sp.css';
import '../../css/r/rhlnpmbpq.css';
import '../../css/m/mlijwm2tw.css';
import '../../css/k/k35jqkb4g.css';
import '../../css/t/tonplxqkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ynnqgt8sp"/><path class="rhlnpmbpq"/><path class="mlijwm2tw"/><path class="k35jqkb4g"/><path class="tonplxqkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-down-line-duotone"} {...others} />);
}

export default Component;
