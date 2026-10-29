import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j6c118bio.css';
import '../../css/q/qq2hbn09w.css';
import '../../css/k/k_sh3ebeq.css';
import '../../css/e/exj5-5bus.css';
import '../../css/r/rdosgk2na.css';
import '../../css/x/x-ny3lhmk.css';
import '../../css/s/sbgm9qb-u.css';
import '../../css/z/zclk9mb2w.css';
import '../../css/t/t1vgrf3dd.css';
import '../../css/z/zyvi1qbft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j6c118bio wm-k"/><path class="qq2hbn09w wm-k"/><path class="k_sh3ebeq wm-k"/><path class="exj5-5bus wm-k"/><path class="rdosgk2na wm-k"/><path class="wm-k x-ny3lhmk"/><path class="sbgm9qb-u wm-shine"/><path class="wm-s zclk9mb2w"/><path class="t1vgrf3dd wm-s"/><path class="wm-s zyvi1qbft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:heart-off"} {...others} />);
}

export default Component;
