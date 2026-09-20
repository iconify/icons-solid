import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f36u_-bsw.css';
import '../../css/v/vjx83pbji.css';
import '../../css/p/pxumu3byy.css';
import '../../css/x/x3iyvacvu.css';
import '../../css/d/dbv406bra.css';
import '../../css/q/qai50qlum.css';
import '../../css/s/sgm0_f_wv.css';
import '../../css/o/o7pb9dbnw.css';
import '../../css/n/nhpgumbwq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="f36u_-bsw"/><path class="vjx83pbji"/><path class="pxumu3byy"/><path class="x3iyvacvu"/><path class="dbv406bra"/><path class="qai50qlum"/><path class="sgm0_f_wv"/><path class="o7pb9dbnw"/><path class="nhpgumbwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-router-linear"} {...others} />);
}

export default Component;
