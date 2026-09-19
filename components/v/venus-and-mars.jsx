import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jgmr07b8f.css';
import '../../css/v/vn20zzbzj.css';
import '../../css/w/wqfr6m9_i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jgmr07b8f"/><path class="vn20zzbzj"/><path class="wqfr6m9_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:venus-and-mars"} {...others} />);
}

export default Component;
