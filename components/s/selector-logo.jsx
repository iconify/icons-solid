import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b-8sd-byw.css';
import '../../css/i/iby3xbcpt.css';
import '../../css/c/ckmirnsom.css';
import '../../css/s/sm_gjjnox.css';
import '../../css/e/erxisvsjf.css';

const viewBox = {"width":157,"height":32};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGEO6zydgc)" clip-rule="evenodd" class="d2kvgvbvc"><path class="b-8sd-byw"/><path class="iby3xbcpt"/><path class="ckmirnsom"/><path class="sm_gjjnox"/></g><defs><clipPath id="SVGEO6zydgc"><path class="erxisvsjf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:selector-logo"} {...others} />);
}

export default Component;
