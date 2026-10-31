import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vwam3bcqd.css';
import '../../css/s/sv1by7a1b.css';
import '../../css/v/vv_isly5n.css';
import '../../css/c/ckmjr2bsy.css';
import '../../css/y/yiqr0ebzj.css';
import '../../css/f/fkwldxr5i.css';
import '../../css/z/zaduz5_vr.css';
import '../../css/w/wlo4qw0fs.css';
import '../../css/j/jef4lekfo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vwam3bcqd wm-shadow"/><path class="sv1by7a1b wm-k"/><path class="vv_isly5n wm-k"/><path class="ckmjr2bsy wm-k"/><path class="wm-k yiqr0ebzj"/><path class="fkwldxr5i wm-shine"/><path class="wm-s zaduz5_vr"/><path class="wlo4qw0fs wm-s"/><path class="jef4lekfo wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:phone-off"} {...others} />);
}

export default Component;
