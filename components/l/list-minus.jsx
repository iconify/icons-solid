import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vizzcub1h.css';
import '../../css/k/kzfm1wbuc.css';
import '../../css/x/xz49ymbyh.css';
import '../../css/q/qx9nnhbsh.css';
import '../../css/d/dtv8_i-jd.css';
import '../../css/g/gb_-m1b4j.css';
import '../../css/x/xjiykjyxl.css';
import '../../css/p/phr1l_yxc.css';
import '../../css/l/lou857bws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="vizzcub1h wm-shadow"/><path class="kzfm1wbuc"/><path class="xz49ymbyh"/><path class="qx9nnhbsh"/><path class="dtv8_i-jd wm-shine"/><path class="gb_-m1b4j wm-s"/><path class="wm-s xjiykjyxl"/><path class="phr1l_yxc wm-s"/><path class="lou857bws wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:list-minus"} {...others} />);
}

export default Component;
