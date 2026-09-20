import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yoikws4mz.css';
import '../../css/w/wxd4p_bca.css';
import '../../css/u/u05c62bds.css';
import '../../css/t/txi379bsk.css';
import '../../css/y/yp4bg-b_d.css';
import '../../css/h/h1_v0dhdk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yoikws4mz"/><path class="wxd4p_bca"/><path class="u05c62bds"/><path class="txi379bsk"/><path class="yp4bg-b_d"/><path class="h1_v0dhdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:time-clock-fire"} {...others} />);
}

export default Component;
