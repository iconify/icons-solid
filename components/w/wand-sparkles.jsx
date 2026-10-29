import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxzxvlbku.css';
import '../../css/e/eq3tixewm.css';
import '../../css/x/xi2btub6o.css';
import '../../css/k/kw5agkbrh.css';
import '../../css/d/dtyt3ubhq.css';
import '../../css/l/lhbw3m1ob.css';
import '../../css/b/b7tazlfjp.css';
import '../../css/i/irduhdczu.css';
import '../../css/v/vizoq_yyl.css';
import '../../css/k/kq1zdtbdp.css';
import '../../css/s/sch6vjcsw.css';
import '../../css/x/xdh-zlbiy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mxzxvlbku wm-shadow"/><path class="eq3tixewm wm-k"/><path class="wm-k xi2btub6o"/><path class="kw5agkbrh wm-k"/><path class="dtyt3ubhq wm-k"/><path class="lhbw3m1ob wm-k"/><path class="b7tazlfjp wm-shine"/><path class="irduhdczu wm-a"/><path class="vizoq_yyl wm-a"/><path class="kq1zdtbdp wm-a"/><path class="sch6vjcsw wm-a"/><path class="wm-k xdh-zlbiy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:wand-sparkles"} {...others} />);
}

export default Component;
