import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4111vyfx.css';
import '../../css/n/n4e39z70h.css';
import '../../css/o/obr2ycjvk.css';
import '../../css/k/kexq24bhe.css';
import '../../css/j/j_kncygds.css';
import '../../css/c/cfi5g33je.css';
import '../../css/i/i72psgb8a.css';

const viewBox = {"width":40,"height":40};
const content = `<g clip-path="url(#SVGbZii27FA)"><path class="v4111vyfx"/><path class="n4e39z70h"/><path class="obr2ycjvk"/><path class="kexq24bhe"/><path class="j_kncygds"/><path class="cfi5g33je"/></g><defs><clipPath id="SVGbZii27FA"><path class="i72psgb8a"/></clipPath></defs>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:google-search-console"} {...others} />);
}

export default Component;
