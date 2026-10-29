import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wrkkogj0z.css';
import '../../css/o/oil9inbcq.css';
import '../../css/r/roxwstbzh.css';
import '../../css/u/u1p6qnb1w.css';
import '../../css/x/x15ulwren.css';
import '../../css/z/z6ivbs5_t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco wrkkogj0z"/><path class="oil9inbcq wm-deco"/><path class="roxwstbzh wm-deco"/><path class="u1p6qnb1w wm-k"/><path class="wm-a x15ulwren"/><path class="wm-k z6ivbs5_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:regex-blueprint"} {...others} />);
}

export default Component;
