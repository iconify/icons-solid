import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fx11sybfc.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/f51us5buf.css';
import '../../css/t/tkm2uacnf.css';
import '../../css/f/fyjxc2bxf.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b5w2rbcto.css';
import '../../css/t/t_thu200v.css';
import '../../css/n/n3y-8_nku.css';
import '../../css/t/t20ne0f3d.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGMHnLWoUn" class="fx11sybfc"/></defs><g class="t_2lkqbxb"><path class="f51us5buf wm-shadow"/><path class="tkm2uacnf"/><path class="fyjxc2bxf"/><use href="#SVGMHnLWoUn" class="d2kvgvbvc"/><path class="b5w2rbcto"/><use href="#SVGMHnLWoUn" class="d2kvgvbvc"/><path class="t_thu200v"/><path class="n3y-8_nku wm-shine"/><path class="t20ne0f3d wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:mails"} {...others} />);
}

export default Component;
