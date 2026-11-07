import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p_a9u9axh.css';
import '../../css/k/kk0xpebyx.css';
import '../../css/l/lq7a-_8su.css';
import '../../css/q/qi4ad9bta.css';
import '../../css/i/i0kw3he6n.css';
import '../../css/d/de5cici1x.css';
import '../../css/f/ftpy_bcfw.css';
import '../../css/i/iwrv_ec1c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="p_a9u9axh"/><path class="kk0xpebyx"/><path class="lq7a-_8su"/><path class="qi4ad9bta"/><path class="i0kw3he6n"/><path class="de5cici1x"/><path class="ftpy_bcfw"/><path class="iwrv_ec1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:water-sun-broken"} {...others} />);
}

export default Component;
