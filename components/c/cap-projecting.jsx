import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hy85st8ir.css';
import '../../css/j/jfrelvtns.css';
import '../../css/u/u9b1crbyt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="hy85st8ir"/><path class="jfrelvtns"/><path class="u9b1crbyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cap-projecting"} {...others} />);
}

export default Component;
