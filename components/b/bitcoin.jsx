import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/klmztbcdf.css';
import '../../css/u/ulk-ont8c.css';
import '../../css/w/w0e3fyibl.css';
import '../../css/c/ck6zxb4st.css';
import '../../css/v/vt39el7kg.css';
import '../../css/x/xa5pkknmk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="klmztbcdf wm-shadow"/><path class="ulk-ont8c"/><path class="w0e3fyibl"/><path class="ck6zxb4st"/><path class="vt39el7kg wm-shine"/><path class="wm-deco xa5pkknmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:bitcoin"} {...others} />);
}

export default Component;
