import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wvuf_acpf.css';
import '../../css/z/zxdru7clb.css';
import '../../css/y/yrkpuqbqd.css';
import '../../css/m/mj1hdndku.css';
import '../../css/h/hojv79__m.css';
import '../../css/b/b6gq52_qa.css';
import '../../css/y/yietgnbes.css';
import '../../css/h/hs5ac4kvz.css';
import '../../css/d/djsb0sbsa.css';
import '../../css/y/yt7vyibbh.css';
import '../../css/h/hps7ocgdk.css';
import '../../css/s/sr8g2ib7r.css';
import '../../css/l/lai__t5lk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow wvuf_acpf"/><path class="wm-a zxdru7clb"/><path class="wm-a yrkpuqbqd"/><path class="mj1hdndku wm-a"/><path class="hojv79__m wm-a"/><path class="b6gq52_qa wm-a"/><path class="wm-a yietgnbes"/><path class="hs5ac4kvz wm-k"/><path class="djsb0sbsa wm-k"/><path class="wm-k yt7vyibbh"/><path class="hps7ocgdk wm-k"/><path class="sr8g2ib7r wm-k"/><path class="lai__t5lk wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:scale"} {...others} />);
}

export default Component;
