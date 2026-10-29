import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/nukz5acwd.css';
import '../../css/v/vedaz2cuy.css';
import '../../css/v/v04xl6b_o.css';
import '../../css/t/tufifybss.css';
import '../../css/e/e3totnboo.css';
import '../../css/q/qbsl8tbwj.css';
import '../../css/i/ipokyubke.css';
import '../../css/u/u8_vgdc_l.css';
import '../../css/m/mukehqbda.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="nukz5acwd wm-shadow"/><path class="vedaz2cuy"/><path class="v04xl6b_o"/><path class="tufifybss"/><path class="e3totnboo wm-shine"/><path class="qbsl8tbwj wm-s"/><path class="ipokyubke wm-s"/><path class="u8_vgdc_l wm-s"/><path class="mukehqbda wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:clock-alert"} {...others} />);
}

export default Component;
