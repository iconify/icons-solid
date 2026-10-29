import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/g3os9oufa.css';
import '../../css/i/i1ukv7b8x.css';
import '../../css/o/o1t3lacdg.css';
import '../../css/h/hz54f1mtz.css';
import '../../css/g/gu25n0bai.css';
import '../../css/w/w4c39xb4o.css';
import '../../css/k/k8y8nsbev.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="g3os9oufa wm-deco"/><path class="i1ukv7b8x wm-deco"/><path class="o1t3lacdg wm-k"/><path class="hz54f1mtz wm-a"/><circle class="gu25n0bai wm-a"/><circle class="w4c39xb4o wm-a"/><circle class="k8y8nsbev wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:api-blueprint"} {...others} />);
}

export default Component;
