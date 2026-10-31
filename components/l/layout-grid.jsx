import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k10c_df9h.css';
import '../../css/r/rvs05nz8z.css';
import '../../css/t/t4id2tu9g.css';
import '../../css/n/nh0rbpbxh.css';
import '../../css/n/nm9dkc2mq.css';
import '../../css/l/l6_m-_byj.css';
import '../../css/l/l34b0zx7g.css';
import '../../css/d/d9j7gubqj.css';
import '../../css/n/ntdkqdbzp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k10c_df9h wm-shadow"/><path class="rvs05nz8z"/><path class="t4id2tu9g"/><path class="nh0rbpbxh"/><path class="nm9dkc2mq"/><path class="l6_m-_byj"/><path class="l34b0zx7g"/><path class="d9j7gubqj"/><path class="ntdkqdbzp wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:layout-grid"} {...others} />);
}

export default Component;
