import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wh92eabxi.css';
import '../../css/t/taq_2pboe.css';
import '../../css/x/xupe0ib4r.css';
import '../../css/i/iyhzocb_q.css';
import '../../css/w/wdglnrnzh.css';
import '../../css/k/kb377o99f.css';
import '../../css/p/p2zwdl5nx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wh92eabxi wm-deco"/><path class="taq_2pboe wm-deco"/><path class="wm-deco xupe0ib4r"/><path class="iyhzocb_q wm-k"/><path class="wdglnrnzh wm-a"/><path class="kb377o99f wm-s"/><path class="p2zwdl5nx wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:love-scroll-blueprint"} {...others} />);
}

export default Component;
