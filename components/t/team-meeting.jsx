import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mwvh93brm.css';
import '../../css/b/bi6s8eqfc.css';
import '../../css/v/v4bcauryt.css';
import '../../css/h/h34kg2y8p.css';
import '../../css/u/utc2dzbfq.css';
import '../../css/r/r-dsxs7od.css';
import '../../css/v/v4t3z_1ov.css';
import '../../css/i/iuwf1qbkc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mwvh93brm"/><path class="bi6s8eqfc"/><path class="v4bcauryt"/><path class="h34kg2y8p"/><path class="utc2dzbfq"/><path class="r-dsxs7od"/><path class="v4t3z_1ov"/><path class="iuwf1qbkc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:team-meeting"} {...others} />);
}

export default Component;
