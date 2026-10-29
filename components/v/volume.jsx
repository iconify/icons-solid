import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pj2bpnbiy.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/z66m_5p7n.css';
import '../../css/b/bw-ydcbql.css';
import '../../css/a/arjggsdxo.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mdtwqabah.css';
import '../../css/s/s0nhmpb_d.css';
import '../../css/k/k4smpn52z.css';
import '../../css/o/ohi0rrl-s.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGOV6Fkc1q" class="pj2bpnbiy"/></defs><g class="t_2lkqbxb"><path class="wm-shadow z66m_5p7n"/><path class="bw-ydcbql"/><path class="arjggsdxo"/><use href="#SVGOV6Fkc1q" class="d2kvgvbvc"/><path class="mdtwqabah"/><use href="#SVGOV6Fkc1q" class="d2kvgvbvc"/><path class="s0nhmpb_d"/><path class="k4smpn52z wm-shine"/><path class="ohi0rrl-s wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:volume"} {...others} />);
}

export default Component;
