import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dt2s63bon.css';
import '../../css/k/krws4v0xk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dt2s63bon"/><path class="krws4v0xk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-columns-split-line-duotone"} {...others} />);
}

export default Component;
