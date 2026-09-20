import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uet3_hbcj.css';
import '../../css/v/vz8buvmxu.css';
import '../../css/i/im5vur_ck.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="uet3_hbcj"/><path class="vz8buvmxu"/><path class="im5vur_ck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:align-back-1"} {...others} />);
}

export default Component;
