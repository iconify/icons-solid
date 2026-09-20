import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c84ym2eoa.css';
import '../../css/x/xkgc93plv.css';
import '../../css/p/pszqgdb3n.css';
import '../../css/n/nyuk0mc7x.css';
import '../../css/g/gol61ubxz.css';
import '../../css/t/tkd280bfx.css';
import '../../css/w/wvldgmytq.css';
import '../../css/b/bf_qazbrq.css';
import '../../css/q/qvmntacte.css';
import '../../css/j/jdl_i0b8f.css';
import '../../css/e/ei8ucubrz.css';
import '../../css/z/zz7xakbgv.css';

const viewBox = {"width":37.618,"height":41.78};
const content = `<defs><clipPath id="SVGR91cum5W" clipPathUnits="userSpaceOnUse"><use href="#SVGitig1cgJ"/></clipPath><clipPath id="SVG1E7jhcWl" clipPathUnits="userSpaceOnUse"><path class="c84ym2eoa"/></clipPath><path id="SVGitig1cgJ" class="xkgc93plv"/></defs><g clip-path="url(#SVGR91cum5W)" transform="matrix(.35278 0 0 -.35278 -365.5 158.747)"><path class="pszqgdb3n"/><path class="nyuk0mc7x"/><path class="gol61ubxz"/><path class="tkd280bfx"/><path class="wvldgmytq"/><path class="bf_qazbrq"/></g><g clip-path="url(#SVG1E7jhcWl)" transform="matrix(.35278 0 0 -.35278 -365.5 158.747)" class="qvmntacte"><path class="jdl_i0b8f"/></g><g clip-path="url(#SVGR91cum5W)" transform="matrix(.35278 0 0 -.35278 -365.5 158.747)"><path class="ei8ucubrz"/><path class="zz7xakbgv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:popeyes"} {...others} />);
}

export default Component;
