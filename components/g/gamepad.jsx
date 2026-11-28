import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sb-u7hbtr.css';
import '../../css/r/rvi3m3bvn.css';
import '../../css/t/tkcc8g1nv.css';
import '../../css/x/xui_jhgnu.css';
import '../../css/s/sj9w6gbtc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="sb-u7hbtr"/><path class="rvi3m3bvn"/><path class="tkcc8g1nv"/><path class="xui_jhgnu"/><path class="sj9w6gbtc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:gamepad"} {...others} />);
}

export default Component;
