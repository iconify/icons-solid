import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/m/m-ypx2l7g.css';
import '../../css/w/ws_62zb9c.css';
import '../../css/u/u5aegb-hj.css';
import '../../css/r/rco2m6vud.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="m-ypx2l7g"/><path class="ws_62zb9c"/><path class="u5aegb-hj"/><path class="rco2m6vud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stars-line-line-duotone"} {...others} />);
}

export default Component;
