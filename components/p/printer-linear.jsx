import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tlsoow8qq.css';
import '../../css/h/hhlxfkbol.css';
import '../../css/s/si1y-5u0z.css';
import '../../css/p/psk1yp1bz.css';
import '../../css/z/zd0f8hb5r.css';
import '../../css/w/wixyovb7d.css';
import '../../css/h/hx-wuc0xm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tlsoow8qq"/><path class="hhlxfkbol"/><path class="si1y-5u0z"/><path class="psk1yp1bz"/><path class="zd0f8hb5r"/><path class="wixyovb7d"/><path class="hx-wuc0xm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:printer-linear"} {...others} />);
}

export default Component;
