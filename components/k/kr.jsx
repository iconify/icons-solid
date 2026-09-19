import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cu97-bc-y.css';
import '../../css/n/n4mhsebtw.css';
import '../../css/a/atmw_jbpp.css';
import '../../css/h/h3kvrs_7r.css';
import '../../css/t/t1xz_5gan.css';
import '../../css/l/loactdbqh.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cu97-bc-y"/><mask id="SVGcFaS5cXn" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path clip-rule="evenodd" class="n4mhsebtw"/></mask><g mask="url(#SVGcFaS5cXn)"><path clip-rule="evenodd" class="atmw_jbpp"/><mask id="SVGqFYwRcno" width="12" height="14" x="10" y="5" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path clip-rule="evenodd" class="h3kvrs_7r"/></mask><g mask="url(#SVGqFYwRcno)"><path clip-rule="evenodd" class="t1xz_5gan"/></g><path clip-rule="evenodd" class="loactdbqh"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:kr"} {...others} />);
}

export default Component;
