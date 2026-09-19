import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thpy47d_f.css';
import '../../css/e/e8x6debrh.css';
import '../../css/u/u96hv1wct.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="thpy47d_f"><circle class="e8x6debrh"/><path class="u96hv1wct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:ionic"} {...others} />);
}

export default Component;
