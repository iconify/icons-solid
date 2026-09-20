import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tlsoow8qq.css';
import '../../css/h/hhlxfkbol.css';
import '../../css/p/psk1yp1bz.css';
import '../../css/z/zd0f8hb5r.css';
import '../../css/f/fg9hpm71u.css';
import '../../css/j/j8y8wybxz.css';
import '../../css/w/wixyovb7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tlsoow8qq"/><path class="hhlxfkbol"/><path class="psk1yp1bz"/><path class="zd0f8hb5r"/><path class="fg9hpm71u"/><path class="j8y8wybxz"/><path class="wixyovb7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:printer-broken"} {...others} />);
}

export default Component;
