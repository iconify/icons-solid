import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r_0pl6b2k.css';
import '../../css/t/txon6o65c.css';
import '../../css/j/j8dd61s2u.css';
import '../../css/w/wc-mzxdmm.css';
import '../../css/m/mrypp-g4i.css';
import '../../css/c/cfl3_9b4r.css';
import '../../css/j/js5h9bc7i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="r_0pl6b2k"/><path class="txon6o65c"/><path class="j8dd61s2u"/><path class="wc-mzxdmm"/><path class="mrypp-g4i"/><path class="cfl3_9b4r"/><path class="js5h9bc7i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-play-vertical-broken"} {...others} />);
}

export default Component;
