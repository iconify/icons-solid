import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jeest4e1g.css';
import '../../css/d/dcs8ey39w.css';
import '../../css/h/hx-wuc0xm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jeest4e1g"/><path class="dcs8ey39w"/><path class="hx-wuc0xm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:printer-minimalistic-linear"} {...others} />);
}

export default Component;
