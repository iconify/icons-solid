import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nqee42z0q.css';
import '../../css/e/e_b8esyyo.css';
import '../../css/n/nt4x22b_x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nqee42z0q"/><path class="e_b8esyyo"/><path class="nt4x22b_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:tunnel"} {...others} />);
}

export default Component;
