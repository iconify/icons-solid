import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/zrb125jmy.css';
import '../../css/l/l0adm-gwp.css';
import '../../css/f/f6eeo3b2u.css';
import '../../css/c/ceek3ubsr.css';
import '../../css/t/tqylwdbgl.css';
import '../../css/v/v8mj9dbqu.css';
import '../../css/r/r0vvqkzyp.css';
import '../../css/g/g09oeg5ss.css';
import '../../css/q/qef_sobyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow zrb125jmy"/><path class="l0adm-gwp"/><path class="f6eeo3b2u"/><path class="ceek3ubsr"/><path class="tqylwdbgl wm-shine"/><path class="v8mj9dbqu wm-s"/><path class="r0vvqkzyp wm-s"/><path class="g09oeg5ss wm-s"/><path class="qef_sobyj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:mail-warning"} {...others} />);
}

export default Component;
