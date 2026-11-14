import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x75rvijcw.css';
import '../../css/k/kw_evg14q.css';
import '../../css/d/d3mtwbcfv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="x75rvijcw"/><path class="kw_evg14q"/><path class="d3mtwbcfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:restore-bin"} {...others} />);
}

export default Component;
