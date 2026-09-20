import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xu48xmbrd.css';
import '../../css/j/jkp1ly-oa.css';
import '../../css/d/dw3utq_su.css';
import '../../css/t/t3mcul6ok.css';
import '../../css/l/lzgvjn04b.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><path class="xu48xmbrd"/><path class="jkp1ly-oa"/><path class="dw3utq_su"/><path class="t3mcul6ok"/><path class="lzgvjn04b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:lab-tools-duo"} {...others} />);
}

export default Component;
