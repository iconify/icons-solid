import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbqqxrbwu.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vk7_jw5kq.css';
import '../../css/t/tcva6zcvh.css';
import '../../css/p/p_s52qdta.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dz5vom56m.css';
import '../../css/e/eiivv0bte.css';
import '../../css/t/toulepbcu.css';
import '../../css/w/wynqm4rzk.css';
import '../../css/a/ang8pkbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGckzvPvGS" class="vbqqxrbwu"/></defs><g class="t_2lkqbxb"><path class="vk7_jw5kq wm-shadow"/><path class="tcva6zcvh"/><path class="p_s52qdta"/><use href="#SVGckzvPvGS" class="d2kvgvbvc"/><path class="dz5vom56m"/><use href="#SVGckzvPvGS" class="d2kvgvbvc"/><path class="eiivv0bte"/><path class="toulepbcu wm-shine"/><path class="wm-deco wynqm4rzk"/><path class="ang8pkbsr wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:trash-2"} {...others} />);
}

export default Component;
