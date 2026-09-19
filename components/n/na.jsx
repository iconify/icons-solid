import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x5d32_qie.css';
import '../../css/n/n4mhsebtw.css';
import '../../css/b/b2q5aacvn.css';
import '../../css/f/fqxf95bax.css';
import '../../css/i/i0593vt2m.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x5d32_qie"/><mask id="SVGcFaS5cXn" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path clip-rule="evenodd" class="n4mhsebtw"/></mask><g mask="url(#SVGcFaS5cXn)"><path clip-rule="evenodd" class="b2q5aacvn"/><path class="fqxf95bax"/><path clip-rule="evenodd" class="i0593vt2m"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:na"} {...others} />);
}

export default Component;
