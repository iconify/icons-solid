import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cj6bbpb_o.css';
import '../../css/a/aw74w_bdz.css';
import '../../css/g/giqk6m29x.css';
import '../../css/r/rce7lrwge.css';
import '../../css/l/lrrssi59j.css';
import '../../css/s/s19-aobqn.css';
import '../../css/f/fxkcx2y1q.css';
import '../../css/f/fy5ma_beo.css';
import '../../css/e/e1o3vh9ym.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="cj6bbpb_o"/><path class="aw74w_bdz"/><path class="giqk6m29x"/><path class="rce7lrwge"/><path class="lrrssi59j"/><path class="s19-aobqn"/><path class="fxkcx2y1q"/><path class="fy5ma_beo"/><path class="e1o3vh9ym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:memo"} {...others} />);
}

export default Component;
