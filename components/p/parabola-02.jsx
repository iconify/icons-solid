import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/finwch3nf.css';
import '../../css/r/r8m7_xn9z.css';
import '../../css/k/kaa7_9syf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="finwch3nf"/><path class="r8m7_xn9z"/><path class="kaa7_9syf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:parabola-02"} {...others} />);
}

export default Component;
