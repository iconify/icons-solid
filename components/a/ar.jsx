import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cu97-bc-y.css';
import '../../css/n/n4mhsebtw.css';
import '../../css/x/xk5_bibjr.css';
import '../../css/e/e3kgm8bjc.css';
import '../../css/b/bqsxhib6h.css';
import '../../css/f/ffubygb2x.css';
import '../../css/p/py1uxj2kd.css';
import '../../css/y/ykk_o-b-t.css';
import '../../css/s/snto575rj.css';
import '../../css/c/c415z2s7a.css';
import '../../css/p/pk8sqkb0v.css';
import '../../css/r/rwwk6o6lk.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cu97-bc-y"/><mask id="SVGcFaS5cXn" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path clip-rule="evenodd" class="n4mhsebtw"/></mask><g clip-rule="evenodd" mask="url(#SVGcFaS5cXn)" class="xk5_bibjr"><path class="e3kgm8bjc"/></g><path clip-rule="evenodd" class="bqsxhib6h"/><path class="ffubygb2x"/><path clip-rule="evenodd" class="py1uxj2kd"/><path class="ykk_o-b-t"/><path clip-rule="evenodd" class="snto575rj"/><path class="c415z2s7a"/><path clip-rule="evenodd" class="pk8sqkb0v"/><path class="rwwk6o6lk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:ar"} {...others} />);
}

export default Component;
