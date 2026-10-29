import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gy46myb0v.css';
import '../../css/t/t3-vstvyc.css';
import '../../css/y/y0bvlvllu.css';
import '../../css/r/r5un5cb-h.css';
import '../../css/c/c344_pc9e.css';
import '../../css/a/avtx8pbux.css';
import '../../css/x/xq_cs2btt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gy46myb0v wm-k"/><path class="t3-vstvyc wm-k"/><path class="wm-k y0bvlvllu"/><path class="r5un5cb-h wm-k"/><path class="c344_pc9e wm-k"/><path class="avtx8pbux wm-k"/><path class="wm-shine xq_cs2btt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:chevrons-left"} {...others} />);
}

export default Component;
