import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mltxv-bug.css';
import '../../css/k/k4ezrtrpx.css';
import '../../css/f/fdor1jbaz.css';
import '../../css/l/l44c6mt1k.css';
import '../../css/o/o-uj1bn-f.css';
import '../../css/d/dzrhtubur.css';
import '../../css/e/eb9tggfvc.css';
import '../../css/z/z3ypbf6nf.css';
import '../../css/g/ggi5z9taj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mltxv-bug wm-shadow"/><path class="k4ezrtrpx wm-shadow"/><path class="fdor1jbaz"/><path class="l44c6mt1k"/><path class="o-uj1bn-f"/><path class="dzrhtubur"/><path class="eb9tggfvc wm-shine"/><path class="wm-shine z3ypbf6nf"/><path class="ggi5z9taj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:reply-all"} {...others} />);
}

export default Component;
