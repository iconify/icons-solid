import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zfzasgbpm.css';
import '../../css/r/r9ppelbhd.css';
import '../../css/m/mhtad-bid.css';
import '../../css/q/quwkebbcw.css';
import '../../css/i/ig9iopb3f.css';
import '../../css/s/syymjccjk.css';
import '../../css/d/d6xs-wc1t.css';
import '../../css/k/k_wvr05bs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow zfzasgbpm"/><path class="r9ppelbhd"/><path class="mhtad-bid"/><path class="quwkebbcw"/><path class="ig9iopb3f"/><path class="syymjccjk"/><path class="d6xs-wc1t"/><path class="k_wvr05bs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-person-headphones"} {...others} />);
}

export default Component;
