import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wt1wofrgc.css';
import '../../css/w/wau_m6b2r.css';
import '../../css/d/d5r05g70u.css';
import '../../css/t/tcqzd1bsk.css';
import '../../css/n/n2r0vuxrn.css';
import '../../css/w/wv_wndbaj.css';
import '../../css/d/dh2o8fbvq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow wt1wofrgc"/><path class="wau_m6b2r"/><path class="d5r05g70u"/><path class="tcqzd1bsk"/><path class="n2r0vuxrn"/><path class="wv_wndbaj"/><path class="dh2o8fbvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:oven"} {...others} />);
}

export default Component;
