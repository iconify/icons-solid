import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qowohdcur.css';
import '../../css/y/yq7bw5vxe.css';
import '../../css/b/bj7id98qa.css';
import '../../css/k/ke9esnbch.css';
import '../../css/b/b7n3c0ype.css';
import '../../css/v/v0vtcebgt.css';
import '../../css/j/jml2z3b2q.css';
import '../../css/k/kkg6lsb9c.css';
import '../../css/v/vh40jnbgf.css';
import '../../css/i/is401vmkw.css';
import '../../css/h/h1sgzyblx.css';
import '../../css/g/gmdbh8b7f.css';
import '../../css/f/fufzb1vod.css';
import '../../css/v/vg6_azbbm.css';
import '../../css/r/r75c2xcvf.css';
import '../../css/h/hr7vc_bib.css';
import '../../css/l/l6zx0nw6a.css';
import '../../css/j/jytebcbro.css';
import '../../css/i/i0o14jb9q.css';
import '../../css/q/q4-4gqbyx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qowohdcur wm-shadow"/><path class="wm-shadow yq7bw5vxe"/><path class="bj7id98qa wm-k"/><path class="ke9esnbch wm-k"/><path class="b7n3c0ype wm-k"/><path class="v0vtcebgt wm-k"/><path class="jml2z3b2q wm-shine"/><path class="kkg6lsb9c wm-k"/><path class="vh40jnbgf wm-deco"/><path class="is401vmkw wm-deco"/><path class="h1sgzyblx wm-deco"/><path class="gmdbh8b7f wm-deco"/><path class="fufzb1vod wm-deco"/><path class="vg6_azbbm wm-deco"/><path class="r75c2xcvf wm-deco"/><path class="hr7vc_bib wm-shine"/><path class="l6zx0nw6a wm-deco"/><path class="jytebcbro wm-deco"/><path class="i0o14jb9q wm-deco"/><path class="q4-4gqbyx wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:armchair"} {...others} />);
}

export default Component;
