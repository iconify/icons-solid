import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/iic6xwb_c.css';
import '../../css/f/fq367fial.css';
import '../../css/i/iom_occzf.css';
import '../../css/w/wn7r_htmm.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="iic6xwb_c"/><path class="fq367fial"/><path class="iom_occzf"/><path class="wn7r_htmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:school-bus-outline"} {...others} />);
}

export default Component;
