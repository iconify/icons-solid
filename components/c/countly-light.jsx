import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ckn5liu4w.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jbxo2cb7v.css';
import '../../css/f/fvnsj1qgk.css';
import '../../css/m/mgw3ddccr.css';

const viewBox = {"width":280,"height":87};
const content = `<mask id="SVGIYlLQbvL" width="77" height="77" x="6" y="5" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path class="ckn5liu4w"/></mask><g class="ft5dv1b6b"><path class="jbxo2cb7v"/><g mask="url(#SVGIYlLQbvL)"><path class="fvnsj1qgk"/><path clip-rule="evenodd" class="mgw3ddccr"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:countly-light"} {...others} />);
}

export default Component;
