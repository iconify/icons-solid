import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vxdyuqn0g.css';
import '../../css/t/t-pou1byi.css';
import '../../css/o/o-h42ccic.css';
import '../../css/v/vrpgkzccc.css';
import '../../css/y/yrroaupgh.css';
import '../../css/k/kba-r-bva.css';
import '../../css/h/hrv7unrio.css';
import '../../css/b/bz2qah_lg.css';
import '../../css/y/y09ti0jvz.css';
import '../../css/s/sjpwivhpv.css';
import '../../css/z/zvx1x_bsy.css';
import '../../css/f/fb-b4jxyy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vxdyuqn0g wm-a"/><path class="t-pou1byi wm-a"/><path class="o-h42ccic wm-a"/><path class="vrpgkzccc wm-deco"/><path class="wm-deco yrroaupgh"/><path class="kba-r-bva wm-k"/><path class="hrv7unrio wm-k"/><path class="bz2qah_lg wm-k"/><path class="wm-shine y09ti0jvz"/><path class="sjpwivhpv wm-a"/><path class="wm-a zvx1x_bsy"/><path class="fb-b4jxyy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:router"} {...others} />);
}

export default Component;
