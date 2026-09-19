import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mu6gvu5iy.css';
import '../../css/k/k-hxx4vnx.css';
import '../../css/d/dt7ysyxnd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="mu6gvu5iy"/><path class="k-hxx4vnx"/><path class="dt7ysyxnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mobile-security"} {...others} />);
}

export default Component;
