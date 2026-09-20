import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ciijfp-yk.css';
import '../../css/g/gknj23bag.css';
import '../../css/d/doyn1fbvf.css';
import '../../css/z/z66fafdvb.css';

const viewBox = {"width":704,"height":221};
const content = `<mask id="SVGyS5OnbhG" width="704" height="221" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path class="ciijfp-yk"/></mask><g mask="url(#SVGyS5OnbhG)"><path class="gknj23bag"/><path class="doyn1fbvf"/><path class="z66fafdvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:runna"} {...others} />);
}

export default Component;
