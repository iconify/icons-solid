import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/tu9e6mbax.css';
import '../../css/h/hi5oigbrd.css';
import '../../css/p/pi-g2wb3c.css';
import '../../css/n/noiaeebql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="tu9e6mbax"/><path class="hi5oigbrd"/><path class="pi-g2wb3c"/><path class="noiaeebql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:maps-editing"} {...others} />);
}

export default Component;
