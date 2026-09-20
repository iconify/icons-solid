import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wah-fvb3g.css';
import '../../css/r/r_s45d2gs.css';
import '../../css/u/utnhp4bhf.css';
import '../../css/l/lqpy27syi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wah-fvb3g"/><path class="r_s45d2gs"/><path class="utnhp4bhf"/><rect class="lqpy27syi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hand-pills-linear"} {...others} />);
}

export default Component;
