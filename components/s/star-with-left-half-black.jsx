import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aagr5ebei.css';
import '../../css/h/h9-x2ac6m.css';
import '../../css/h/hcf_1bcts.css';
import '../../css/r/r8ikbo9ae.css';
import '../../css/l/l7_ivckqz.css';
import '../../css/j/jbllbibrd.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="aagr5ebei"/><path class="h9-x2ac6m"/><path class="hcf_1bcts"/><g class="r8ikbo9ae"><path class="l7_ivckqz"/><path class="jbllbibrd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:star-with-left-half-black"} {...others} />);
}

export default Component;
