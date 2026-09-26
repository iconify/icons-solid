import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i22s-4u1h.css';
import '../../css/t/t1j-_8esg.css';
import '../../css/d/dplnzz0rj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="i22s-4u1h"/><path class="t1j-_8esg"/><path class="dplnzz0rj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panels-bottom-right-linear"} {...others} />);
}

export default Component;
