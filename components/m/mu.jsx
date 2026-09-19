import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x7ijutblq.css';
import '../../css/n/n4mhsebtw.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/foivcwbxn.css';
import '../../css/g/gnb7v-rkw.css';
import '../../css/f/f1pc46-0f.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x7ijutblq"/><mask id="SVGcFaS5cXn" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path clip-rule="evenodd" class="n4mhsebtw"/></mask><g clip-rule="evenodd" mask="url(#SVGcFaS5cXn)" class="d2kvgvbvc"><path class="foivcwbxn"/><path class="gnb7v-rkw"/><path class="f1pc46-0f"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:mu"} {...others} />);
}

export default Component;
