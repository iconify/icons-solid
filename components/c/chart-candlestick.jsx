import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sdlie9bxy.css';
import '../../css/a/a7ym4_b_w.css';
import '../../css/w/w654_88qs.css';
import '../../css/r/rd0pkkbqe.css';
import '../../css/u/ur9xw6bjp.css';
import '../../css/t/t8c2elzmo.css';
import '../../css/j/jc5cj0blo.css';
import '../../css/z/zi-idccem.css';
import '../../css/y/yzuxgpe9m.css';
import '../../css/t/tre9-0u4b.css';
import '../../css/k/kjnxgv_ms.css';
import '../../css/s/sfu6lzbbc.css';
import '../../css/g/gvg76vnpb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sdlie9bxy wm-shadow"/><path class="a7ym4_b_w wm-a"/><path class="w654_88qs wm-a"/><path class="rd0pkkbqe wm-a"/><path class="ur9xw6bjp wm-a"/><path class="t8c2elzmo wm-a"/><path class="jc5cj0blo wm-a"/><path class="wm-k zi-idccem"/><path class="wm-k yzuxgpe9m"/><path class="tre9-0u4b wm-k"/><path class="kjnxgv_ms wm-k"/><path class="sfu6lzbbc wm-k"/><path class="gvg76vnpb wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:chart-candlestick"} {...others} />);
}

export default Component;
