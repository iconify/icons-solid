import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q93a08k3y.css';
import '../../css/e/ecz1ctb0q.css';
import '../../css/a/a73hyzbhk.css';
import '../../css/f/fzp70nyvn.css';
import '../../css/j/j2o4i1bxi.css';
import '../../css/c/cyie5zb6s.css';
import '../../css/d/dxytznbwi.css';
import '../../css/u/ufo-wybpw.css';
import '../../css/m/mzwwmb4zz.css';
import '../../css/k/kic6z0bbn.css';
import '../../css/c/chge1p9jy.css';
import '../../css/c/co4tywirf.css';
import '../../css/z/z1p-_ix7u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q93a08k3y wm-shadow"/><path class="ecz1ctb0q"/><path class="a73hyzbhk"/><path class="fzp70nyvn"/><path class="j2o4i1bxi"/><path class="cyie5zb6s"/><path class="dxytznbwi"/><path class="ufo-wybpw"/><path class="mzwwmb4zz"/><path class="kic6z0bbn wm-shine"/><path class="chge1p9jy wm-shine"/><path class="co4tywirf"/><path class="z1p-_ix7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:droplet"} {...others} />);
}

export default Component;
