import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p_eg_1bvq.css';
import '../../css/m/mnd_fvgsb.css';
import '../../css/i/ikd6lokut.css';
import '../../css/x/xc1ugqj_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="p_eg_1bvq"/><path class="mnd_fvgsb"/><path class="ikd6lokut"/><path class="xc1ugqj_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:gate-and"} {...others} />);
}

export default Component;
