import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gllx6bbxm.css';
import '../../css/g/g26eo_g4b.css';
import '../../css/l/lnt5ltwcn.css';
import '../../css/e/e4wsblj_k.css';
import '../../css/p/p3bm899fv.css';
import '../../css/g/gfs-9-6jv.css';
import '../../css/o/okvx91biv.css';
import '../../css/l/ltjw25b1y.css';
import '../../css/k/k6j2fzghi.css';
import '../../css/j/j5sn3jerj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gllx6bbxm wm-shadow"/><path class="g26eo_g4b wm-shadow"/><path class="lnt5ltwcn"/><path class="e4wsblj_k"/><path class="p3bm899fv"/><path class="gfs-9-6jv"/><path class="okvx91biv"/><path class="ltjw25b1y wm-shine"/><path class="k6j2fzghi wm-shine"/><path class="j5sn3jerj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:minimize"} {...others} />);
}

export default Component;
