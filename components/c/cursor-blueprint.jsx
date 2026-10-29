import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/re5gu1b3g.css';
import '../../css/o/o1vc6ub0h.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/x/xaxakq1ge.css';
import '../../css/v/v6yrjdb-q.css';
import '../../css/m/mdos4obak.css';
import '../../css/a/arv57qb3n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="re5gu1b3g wm-deco"/><path class="o1vc6ub0h wm-deco"/><path class="sdaucgb_l wm-deco"/><path class="wm-k xaxakq1ge"/><path class="v6yrjdb-q wm-a"/><path class="mdos4obak wm-k"/><path class="arv57qb3n wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cursor-blueprint"} {...others} />);
}

export default Component;
