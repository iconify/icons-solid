import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_-gkxb7l.css';
import '../../css/o/oi4q17exb.css';
import '../../css/v/vppvk20zr.css';
import '../../css/e/ekxqcgbyf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b_-gkxb7l"/><path class="oi4q17exb"/><path class="vppvk20zr"/><path class="ekxqcgbyf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-sparkle"} {...others} />);
}

export default Component;
