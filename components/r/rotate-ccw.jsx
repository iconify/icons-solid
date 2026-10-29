import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nr1fgdbqj.css';
import '../../css/o/od56e9b_g.css';
import '../../css/r/rxcn1sb3h.css';
import '../../css/l/l50aa8bzb.css';
import '../../css/u/ug8-9vfez.css';
import '../../css/h/hf4sq_9gm.css';
import '../../css/m/muzsfbb7o.css';
import '../../css/a/amw9dkb0i.css';
import '../../css/j/jpy-dzz9p.css';
import '../../css/c/ctnn23-4m.css';
import '../../css/d/dj9b7sl4v.css';
import '../../css/c/crat_3s3i.css';
import '../../css/y/yrdosebek.css';
import '../../css/i/iu4_c1bon.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nr1fgdbqj wm-shadow"/><path class="od56e9b_g wm-k"/><path class="rxcn1sb3h wm-k"/><path class="l50aa8bzb wm-k"/><path class="ug8-9vfez wm-k"/><path class="hf4sq_9gm wm-k"/><path class="muzsfbb7o wm-shine"/><path class="amw9dkb0i wm-k"/><path class="jpy-dzz9p wm-k"/><path class="ctnn23-4m wm-k"/><path class="dj9b7sl4v wm-k"/><path class="crat_3s3i wm-k"/><path class="wm-k yrdosebek"/><path class="iu4_c1bon wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-gothic:rotate-ccw"} {...others} />);
}

export default Component;
