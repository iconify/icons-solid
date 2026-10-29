import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/ado3wtb9y.css';
import '../../css/x/xyrp82bvx.css';
import '../../css/q/qz15h9brj.css';
import '../../css/a/a5-bzkpbc.css';
import '../../css/a/aaz_x4s9u.css';
import '../../css/m/my23js-jz.css';
import '../../css/a/ang8pkbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ado3wtb9y wm-shadow"/><path class="xyrp82bvx"/><path class="qz15h9brj"/><path class="a5-bzkpbc"/><path class="aaz_x4s9u wm-shine"/><path class="my23js-jz wm-deco"/><path class="ang8pkbsr wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:flame"} {...others} />);
}

export default Component;
