import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cnox2_2_k.css';
import '../../css/k/kur13mblj.css';
import '../../css/d/dr_d4wbmt.css';
import '../../css/a/aq9b667ef.css';
import '../../css/i/i8udtsb8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cnox2_2_k wm-deco"/><path class="kur13mblj wm-k"/><path class="dr_d4wbmt wm-k"/><path class="aq9b667ef wm-k"/><path class="i8udtsb8f wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:arrow-down"} {...others} />);
}

export default Component;
