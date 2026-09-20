import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nu5enkbzg.css';
import '../../css/z/zn10sld1h.css';
import '../../css/w/w357jhe3h.css';
import '../../css/z/z9zrhebnw.css';
import '../../css/e/e3zt21b_v.css';
import '../../css/r/rkninmigh.css';
import '../../css/h/hflxsej9h.css';
import '../../css/b/bjkn8_l3w.css';
import '../../css/m/mxjwe0bkt.css';
import '../../css/r/rrznc8wdy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nu5enkbzg"/><path class="zn10sld1h"/><path class="w357jhe3h"/><path class="z9zrhebnw"/><path class="e3zt21b_v"/><path class="rkninmigh"/><path class="hflxsej9h"/><path class="bjkn8_l3w"/><path class="mxjwe0bkt"/><path class="rrznc8wdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-replace-linear"} {...others} />);
}

export default Component;
