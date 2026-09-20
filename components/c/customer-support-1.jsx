import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/moyzajbqc.css';
import '../../css/s/sfz3i15tc.css';
import '../../css/w/wd7pi1brx.css';
import '../../css/v/vyz3_obde.css';
import '../../css/i/ih12mbb1v.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="moyzajbqc"/><path class="sfz3i15tc"/><path class="wd7pi1brx"/><path class="vyz3_obde"/><path class="ih12mbb1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:customer-support-1"} {...others} />);
}

export default Component;
