import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xksj7ypyl.css';
import '../../css/i/iglmxs09o.css';
import '../../css/q/qnct49bib.css';
import '../../css/p/pptjt-b0f.css';
import '../../css/g/g3h4wybzg.css';
import '../../css/c/c2th_jbds.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow xksj7ypyl"/><path class="iglmxs09o"/><path class="qnct49bib"/><path class="pptjt-b0f"/><path class="g3h4wybzg"/><path class="c2th_jbds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:fan"} {...others} />);
}

export default Component;
