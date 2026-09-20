import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/srz1_-b8a.css';
import '../../css/n/nt3sg5wfu.css';
import '../../css/k/kklqr_b8v.css';
import '../../css/s/stn1gcc8r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="srz1_-b8a"/><path class="nt3sg5wfu"/><path class="kklqr_b8v"/><path class="stn1gcc8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:plate-outline"} {...others} />);
}

export default Component;
