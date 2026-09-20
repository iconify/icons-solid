import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hhsb_pbwu.css';
import '../../css/e/ekdgtv8_y.css';
import '../../css/j/jtdiq_g3o.css';
import '../../css/h/hy97r_r0l.css';
import '../../css/k/korox0ovz.css';
import '../../css/m/mprxa8bel.css';
import '../../css/z/zlke3-qhh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hhsb_pbwu"/><path class="ekdgtv8_y"/><path class="jtdiq_g3o"/><path class="hy97r_r0l"/><path class="korox0ovz"/><path class="mprxa8bel"/><path class="zlke3-qhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:e-commerce-touch-buy"} {...others} />);
}

export default Component;
