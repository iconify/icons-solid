import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/qxaxoxiqd.css';
import '../../css/u/u11n-lw5u.css';
import '../../css/s/sfs7wut0t.css';
import '../../css/x/xg2w27lak.css';
import '../../css/y/yt678qbsq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="qxaxoxiqd wm-deco"/><path class="u11n-lw5u wm-deco"/><path class="sfs7wut0t wm-k"/><path class="wm-a xg2w27lak"/><path class="wm-k yt678qbsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:case-sensitive-blueprint"} {...others} />);
}

export default Component;
