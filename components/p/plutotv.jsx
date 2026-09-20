import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/da32s_zqc.css';
import '../../css/l/lpxx92zqs.css';
import '../../css/m/menrsu8bq.css';
import '../../css/x/x8lzkbc1i.css';

const viewBox = {"width":2500,"height":2500};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGj8ENbdAJ)"><rect class="da32s_zqc"/><path class="lpxx92zqs"/><path class="menrsu8bq"/></g><defs><clipPath id="SVGj8ENbdAJ"><path class="x8lzkbc1i"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:plutotv"} {...others} />);
}

export default Component;
