import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sdrg8fy2c.css';
import '../../css/d/dij3yubmk.css';
import '../../css/d/djqs5cxtc.css';
import '../../css/s/silmxcb_x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="sdrg8fy2c"/><path class="dij3yubmk"/><path class="djqs5cxtc"/><path class="silmxcb_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-2-line-duotone"} {...others} />);
}

export default Component;
