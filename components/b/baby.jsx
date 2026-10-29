import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wy50aulbm.css';
import '../../css/w/wpyf75mzi.css';
import '../../css/t/tw8hqdbgu.css';
import '../../css/x/x_c02swbg.css';
import '../../css/x/xljpzopgz.css';
import '../../css/f/f2w09mrvx.css';
import '../../css/z/z4adih65n.css';
import '../../css/a/ang8pkbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow wy50aulbm"/><path class="wpyf75mzi"/><path class="tw8hqdbgu"/><path class="x_c02swbg"/><path class="xljpzopgz"/><path class="f2w09mrvx wm-shine"/><path class="wm-deco z4adih65n"/><path class="ang8pkbsr wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:baby"} {...others} />);
}

export default Component;
