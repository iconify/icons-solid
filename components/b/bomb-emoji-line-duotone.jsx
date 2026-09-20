import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/m/m8po4lb0y.css';
import '../../css/s/swwenbbzn.css';
import '../../css/x/x6n06bc8k.css';
import '../../css/w/ws_nvmbfy.css';
import '../../css/q/qy_bk4bmk.css';
import '../../css/n/nhusggbmx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><circle class="m8po4lb0y"/><path class="swwenbbzn"/><path class="x6n06bc8k"/><path class="ws_nvmbfy"/><path class="qy_bk4bmk"/><ellipse class="nhusggbmx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bomb-emoji-line-duotone"} {...others} />);
}

export default Component;
