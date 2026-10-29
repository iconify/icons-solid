import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fk1gczbdn.css';
import '../../css/a/ako7qzemx.css';
import '../../css/d/d-njxlbnd.css';
import '../../css/a/ardhctb2j.css';
import '../../css/w/w-yihotij.css';
import '../../css/c/c0da7acic.css';
import '../../css/n/n7mdeibzy.css';
import '../../css/k/k1lzzmbvh.css';
import '../../css/u/u5vpk_bwj.css';
import '../../css/w/w9fco5bgl.css';
import '../../css/s/sv9znbb1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fk1gczbdn wm-shadow"/><path class="ako7qzemx wm-k"/><path class="d-njxlbnd wm-k"/><path class="ardhctb2j wm-k"/><path class="w-yihotij wm-k"/><path class="c0da7acic wm-k"/><path class="n7mdeibzy wm-k"/><path class="k1lzzmbvh wm-k"/><path class="u5vpk_bwj wm-k"/><path class="w9fco5bgl wm-k"/><path class="sv9znbb1q wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-gothic:check"} {...others} />);
}

export default Component;
