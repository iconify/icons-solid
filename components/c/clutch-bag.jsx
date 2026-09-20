import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hglesubmm.css';
import '../../css/d/doj9dq_jg.css';
import '../../css/p/p0-cslbgk.css';
import '../../css/d/det5ad1ub.css';
import '../../css/i/i497iigme.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="hglesubmm"/><g class="doj9dq_jg"><path class="p0-cslbgk"/><path class="det5ad1ub"/><path class="i497iigme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:clutch-bag"} {...others} />);
}

export default Component;
