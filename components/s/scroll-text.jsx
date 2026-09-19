import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pcnhie19y.css';
import '../../css/e/esoc3gbtn.css';
import '../../css/n/nyouw_b1f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path clip-rule="evenodd" class="pcnhie19y"/><path class="esoc3gbtn"/><path class="nyouw_b1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:scroll-text"} {...others} />);
}

export default Component;
