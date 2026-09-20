import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/edkmrmbox.css';
import '../../css/m/mko8byb_a.css';
import '../../css/r/r-yu2-btl.css';
import '../../css/x/xz78fxohb.css';
import '../../css/k/kljit-ptc.css';
import '../../css/r/rkopdvc-v.css';
import '../../css/o/otnb-wb1k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="edkmrmbox"/><path class="mko8byb_a"/><path class="r-yu2-btl"/><path class="xz78fxohb"/><path class="kljit-ptc"/><path class="rkopdvc-v"/><path class="otnb-wb1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:fruit-watermelon"} {...others} />);
}

export default Component;
