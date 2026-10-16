import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v41lt2b8o.css';
import '../../css/b/bjf7tnlxr.css';
import '../../css/f/fwr6h5b8c.css';
import '../../css/c/ct31utbir.css';
import '../../css/n/nth-hgavw.css';
import '../../css/c/caos-bpes.css';
import '../../css/l/lbsd2dbab.css';
import '../../css/m/mtosyibah.css';

const viewBox = {"width":600,"height":601};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGCcW6HbUV)"><path class="v41lt2b8o"/><path class="bjf7tnlxr"/><path class="fwr6h5b8c"/><path class="ct31utbir"/><path class="nth-hgavw"/><path class="caos-bpes"/><path class="lbsd2dbab"/></g><defs><clipPath id="SVGCcW6HbUV"><path class="mtosyibah"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:kestra"} {...others} />);
}

export default Component;
