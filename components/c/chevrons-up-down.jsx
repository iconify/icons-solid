import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d9me005mr.css';
import '../../css/e/em4jyxvte.css';
import '../../css/k/k1ba53b2j.css';
import '../../css/o/ocgcnvbbu.css';
import '../../css/f/f7z1cbc8s.css';
import '../../css/m/mtk6nob1z.css';
import '../../css/z/z2uv60b5r.css';
import '../../css/s/s09p_5b5x.css';
import '../../css/p/pozjnabno.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d9me005mr wm-shadow"/><path class="em4jyxvte wm-shadow"/><path class="k1ba53b2j"/><path class="ocgcnvbbu"/><path class="f7z1cbc8s"/><path class="mtk6nob1z"/><path class="wm-shine z2uv60b5r"/><path class="s09p_5b5x wm-shine"/><path class="pozjnabno"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:chevrons-up-down"} {...others} />);
}

export default Component;
