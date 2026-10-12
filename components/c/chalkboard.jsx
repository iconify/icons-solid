import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/deut1gbkc.css';
import '../../css/k/kf5wfoe_q.css';
import '../../css/p/pf_0cgwzr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="deut1gbkc"/><path class="kf5wfoe_q"/><path class="pf_0cgwzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chalkboard"} {...others} />);
}

export default Component;
