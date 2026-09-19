import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cu97-bc-y.css';
import '../../css/n/n4mhsebtw.css';
import '../../css/r/r74v842se.css';
import '../../css/h/h2idx2bdx.css';
import '../../css/k/kg3oyeb-b.css';
import '../../css/z/z4ju90bzq.css';
import '../../css/i/i5j6y-yad.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cu97-bc-y"/><mask id="SVGcFaS5cXn" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path clip-rule="evenodd" class="n4mhsebtw"/></mask><g mask="url(#SVGcFaS5cXn)"><path clip-rule="evenodd" class="r74v842se"/><path class="h2idx2bdx"/><path clip-rule="evenodd" class="kg3oyeb-b"/><path class="z4ju90bzq"/><path class="i5j6y-yad"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:sv"} {...others} />);
}

export default Component;
