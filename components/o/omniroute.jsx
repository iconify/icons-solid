import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dmjov21wv.css';
import '../../css/o/ov3llru_y.css';
import '../../css/f/fj6o57btn.css';
import '../../css/n/ncxdqyr0i.css';
import '../../css/e/el-p1bbck.css';
import '../../css/p/povs420wf.css';
import '../../css/q/qjylu1bwv.css';
import '../../css/f/f8frx_42l.css';
import '../../css/y/ye8qxubbu.css';
import '../../css/f/fyl7df4jv.css';
import '../../css/z/z2ra-1ban.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><rect fill="url(#SVGVLU3vzPE)" class="dmjov21wv"/><circle class="ov3llru_y"/><circle class="fj6o57btn"/><circle class="ncxdqyr0i"/><circle class="el-p1bbck"/><circle class="povs420wf"/><circle class="qjylu1bwv"/><circle class="f8frx_42l"/><path class="ye8qxubbu"/><defs><linearGradient id="SVGVLU3vzPE" x1="0" x2="32" y1="0" y2="32" gradientUnits="userSpaceOnUse"><stop class="fyl7df4jv"/><stop offset="1" class="z2ra-1ban"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:omniroute"} {...others} />);
}

export default Component;
