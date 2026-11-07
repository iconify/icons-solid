import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y0arut6ax.css';
import '../../css/e/e66wveb3k.css';
import '../../css/b/bvwq-0kiq.css';
import '../../css/i/itr5k-b-e.css';
import '../../css/h/htq9jdyaq.css';
import '../../css/n/ny4-c4djh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="y0arut6ax"/><path class="e66wveb3k"/><path class="bvwq-0kiq"/><path class="itr5k-b-e"/><path class="htq9jdyaq"/><path class="ny4-c4djh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-linear"} {...others} />);
}

export default Component;
