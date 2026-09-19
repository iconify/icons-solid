import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cu97-bc-y.css';
import '../../css/n/n4mhsebtw.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j2i80_c1v.css';
import '../../css/a/a9nh_llpg.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cu97-bc-y"/><mask id="SVGcFaS5cXn" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path clip-rule="evenodd" class="n4mhsebtw"/></mask><g clip-rule="evenodd" mask="url(#SVGcFaS5cXn)" class="d2kvgvbvc"><path class="j2i80_c1v"/><path class="a9nh_llpg"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:nl"} {...others} />);
}

export default Component;
