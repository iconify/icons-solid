import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dtemydjmd.css';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/occz4wbgh.css';
import '../../css/a/atjk8mbde.css';
import '../../css/h/hsixsabso.css';

const viewBox = {"width":32,"height":32};
const content = `<mask id="SVGUJ7Mq8OH" width="28" height="25" x="2" y="4" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path class="dtemydjmd"/></mask><g class="gp_8x1bzb"><path class="occz4wbgh"/><g mask="url(#SVGUJ7Mq8OH)" class="atjk8mbde"><path class="hsixsabso"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:purple-heart"} {...others} />);
}

export default Component;
