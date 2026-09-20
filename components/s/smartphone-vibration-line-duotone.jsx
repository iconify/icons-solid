import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m9lr-xbek.css';
import '../../css/i/iwzbdbrcw.css';
import '../../css/u/uh1sxf1kh.css';
import '../../css/j/jm518nbhy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="m9lr-xbek"/><path class="iwzbdbrcw"/><path class="uh1sxf1kh"/><path class="jm518nbhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smartphone-vibration-line-duotone"} {...others} />);
}

export default Component;
