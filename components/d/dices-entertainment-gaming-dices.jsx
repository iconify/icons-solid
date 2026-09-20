import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/v/vxb472q1c.css';
import '../../css/p/pboph_eko.css';
import '../../css/g/gur5w4bsp.css';
import '../../css/x/xgf-71b_m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="vxb472q1c"/><path class="pboph_eko"/><path class="gur5w4bsp"/><path class="xgf-71b_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:dices-entertainment-gaming-dices"} {...others} />);
}

export default Component;
