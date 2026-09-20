import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/illrh5bzf.css';
import '../../css/r/rr-kwt_tv.css';
import '../../css/i/it-ggbbnk.css';

const viewBox = {"width":91,"height":80};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGCkrFieff)" class="illrh5bzf"><path class="rr-kwt_tv"/></g><defs><clipPath id="SVGCkrFieff"><path class="it-ggbbnk"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:adobe"} {...others} />);
}

export default Component;
