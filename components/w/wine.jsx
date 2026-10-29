import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ax71187bl.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/ldcurbcyq.css';
import '../../css/q/qcy1lqb_x.css';
import '../../css/h/hz9gs91yz.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/q7dvfw84v.css';
import '../../css/z/zlnuficvl.css';
import '../../css/n/nr0_85b2a.css';
import '../../css/q/qxa552b8g.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGP6rUFeBn" class="ax71187bl"/></defs><g class="t_2lkqbxb"><path class="ldcurbcyq wm-shadow"/><path class="qcy1lqb_x"/><path class="hz9gs91yz"/><use href="#SVGP6rUFeBn" class="d2kvgvbvc"/><path class="q7dvfw84v"/><use href="#SVGP6rUFeBn" class="d2kvgvbvc"/><path class="zlnuficvl"/><path class="nr0_85b2a wm-shine"/><path class="qxa552b8g wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:wine"} {...others} />);
}

export default Component;
