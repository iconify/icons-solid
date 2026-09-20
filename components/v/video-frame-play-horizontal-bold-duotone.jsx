import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bbegpb7cr.css';
import '../../css/y/yy6loabpq.css';
import '../../css/o/o-25nqb-e.css';
import '../../css/o/ox9pyf1wh.css';
import '../../css/i/ip2gvv-3q.css';
import '../../css/v/vuc-uestr.css';
import '../../css/r/r_hjpwbcb.css';
import '../../css/b/b0pjaqp0n.css';
import '../../css/m/mvwgs7bfo.css';
import '../../css/o/o8vynmh8r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bbegpb7cr"/><path class="yy6loabpq"/><path class="o-25nqb-e"/><path class="ox9pyf1wh"/><path class="ip2gvv-3q"/><path class="vuc-uestr"/><path class="r_hjpwbcb"/><path class="b0pjaqp0n"/><path class="mvwgs7bfo"/><path class="o8vynmh8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-play-horizontal-bold-duotone"} {...others} />);
}

export default Component;
