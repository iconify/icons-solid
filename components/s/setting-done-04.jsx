import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zqbtg_noo.css';
import '../../css/d/dt4ohkbdz.css';
import '../../css/v/vq_hmhzfq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zqbtg_noo"/><path class="dt4ohkbdz"/><path class="vq_hmhzfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:setting-done-04"} {...others} />);
}

export default Component;
