import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c37-n8brn.css';
import '../../css/u/uff7anb_q.css';
import '../../css/q/qvexrp4jd.css';
import '../../css/a/aaap2j03g.css';
import '../../css/h/hxxitxtpo.css';
import '../../css/c/c-u7_bb3z.css';
import '../../css/v/v0ofyibev.css';
import '../../css/g/gc00gbcil.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c37-n8brn"/><path class="uff7anb_q"/><path class="qvexrp4jd"/><path class="aaap2j03g"/><path class="hxxitxtpo"/><path class="c-u7_bb3z"/><path class="v0ofyibev"/><path class="gc00gbcil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:amusement-park-electric-cars"} {...others} />);
}

export default Component;
