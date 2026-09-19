import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tf8ifcbgn.css';
import '../../css/n/njlya3b2h.css';
import '../../css/h/haunucdsf.css';
import '../../css/z/znez6bula.css';
import '../../css/j/jpsikcchz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tf8ifcbgn"/><path class="njlya3b2h"/><path class="haunucdsf"/><path class="znez6bula"/><path class="jpsikcchz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hospital-01"} {...others} />);
}

export default Component;
