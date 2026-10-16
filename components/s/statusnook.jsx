import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hl09mzc-m.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sdrn65boy.css';
import '../../css/b/bxbyul_cw.css';
import '../../css/e/e_h674b7e.css';
import '../../css/x/x5d98o6fo.css';
import '../../css/x/x7ypyvzuj.css';
import '../../css/b/bmuu-rbld.css';

const viewBox = {"width":226,"height":59};
const content = `<defs><path id="SVGsbIiYbWO" class="hl09mzc-m"/></defs><g class="ft5dv1b6b"><path class="sdrn65boy"/><path class="bxbyul_cw"/><path class="e_h674b7e"/><path class="x5d98o6fo"/><use href="#SVGsbIiYbWO"/><use href="#SVGsbIiYbWO"/><path class="x7ypyvzuj"/><path class="bmuu-rbld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:statusnook"} {...others} />);
}

export default Component;
