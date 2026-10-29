import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hzw61jb_z.css';
import '../../css/y/y3y6spbtc.css';
import '../../css/f/fv0_nacyl.css';
import '../../css/e/eklnfjwlt.css';
import '../../css/z/z2_44uplp.css';
import '../../css/q/qwbh14bjt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="hzw61jb_z wm-shadow"/><path class="y3y6spbtc"/><path class="fv0_nacyl"/><path class="eklnfjwlt"/><path class="wm-shine z2_44uplp"/><path class="qwbh14bjt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:tooth"} {...others} />);
}

export default Component;
