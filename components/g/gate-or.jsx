import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fa986fbos.css';
import '../../css/x/xdc556bol.css';
import '../../css/h/hfirngbmd.css';
import '../../css/x/xc1ugqj_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="fa986fbos"/><path class="xdc556bol"/><path class="hfirngbmd"/><path class="xc1ugqj_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:gate-or"} {...others} />);
}

export default Component;
