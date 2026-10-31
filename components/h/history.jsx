import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5eak3k2p.css';
import '../../css/t/tse10ha_g.css';
import '../../css/w/wta-c5dah.css';
import '../../css/i/ijl9-sfgo.css';
import '../../css/x/xqcltacvn.css';
import '../../css/q/qxat7em0x.css';
import '../../css/t/t1isuo9js.css';
import '../../css/z/z7pl7-74l.css';
import '../../css/r/rkczfdcsa.css';
import '../../css/u/uayxacb3b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l5eak3k2p"><path class="tse10ha_g wm-shadow"/><path class="wm-shadow wta-c5dah"/><circle class="ijl9-sfgo wm-shadow"/><circle class="wm-shadow xqcltacvn"/><path class="qxat7em0x wm-k"/><path class="t1isuo9js wm-k"/><circle class="wm-shadow z7pl7-74l"/><circle class="rkczfdcsa wm-k"/><path class="uayxacb3b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:history"} {...others} />);
}

export default Component;
