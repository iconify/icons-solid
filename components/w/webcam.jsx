import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv1czb6er.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fi4mtaclq.css';
import '../../css/k/ki1hf72pa.css';
import '../../css/m/m4ks30b-y.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/foaddibvx.css';
import '../../css/m/mh_q7mksz.css';
import '../../css/l/ljpr7cwxt.css';
import '../../css/j/jrcnzga3p.css';
import '../../css/a/ang8pkbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVG9TrvD25R" class="hv1czb6er"/></defs><g class="t_2lkqbxb"><path class="fi4mtaclq wm-shadow"/><path class="ki1hf72pa"/><path class="m4ks30b-y"/><use href="#SVG9TrvD25R" class="d2kvgvbvc"/><path class="foaddibvx"/><use href="#SVG9TrvD25R" class="d2kvgvbvc"/><path class="mh_q7mksz"/><path class="ljpr7cwxt wm-shine"/><path class="jrcnzga3p wm-deco"/><path class="ang8pkbsr wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:webcam"} {...others} />);
}

export default Component;
