import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/khepvrb6r.css';
import '../../css/n/n1_ykhn3f.css';
import '../../css/e/ep2vvy3hy.css';
import '../../css/e/exgld-b-f.css';
import '../../css/v/v3g6xoxym.css';
import '../../css/j/j6p0y4-0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="khepvrb6r"/><path class="n1_ykhn3f"/><path class="ep2vvy3hy"/><path class="exgld-b-f"/><circle class="v3g6xoxym"/><path class="j6p0y4-0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:diploma-broken"} {...others} />);
}

export default Component;
