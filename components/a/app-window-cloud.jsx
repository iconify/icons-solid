import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w97ydz61o.css';
import '../../css/w/wg_rk8b0t.css';
import '../../css/b/bpvapv1zv.css';
import '../../css/m/m2gwakcit.css';
import '../../css/q/q23_-bbjn.css';
import '../../css/t/tbhjflqag.css';
import '../../css/n/nxshvh2hx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w97ydz61o"/><path class="wg_rk8b0t"/><path class="bpvapv1zv"/><path class="m2gwakcit"/><path class="q23_-bbjn"/><path class="tbhjflqag"/><path class="nxshvh2hx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:app-window-cloud"} {...others} />);
}

export default Component;
