import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lkfc82llb.css';
import '../../css/f/fzxf-4paq.css';
import '../../css/r/ryznbrbtq.css';
import '../../css/d/d7lyd5btq.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/e/ewwrq6wur.css';
import '../../css/u/u7i0s_bln.css';
import '../../css/b/bj4e0iffm.css';
import '../../css/e/efbw92r2c.css';

const viewBox = {"width":72,"height":72};
const content = `<ellipse transform="rotate(-51.131 34.153 34.635)" class="lkfc82llb"/><path class="fzxf-4paq"/><path class="ryznbrbtq"/><path class="d7lyd5btq"/><g class="brzn_0bpr"><path class="ewwrq6wur"/><ellipse transform="rotate(-51.131 34.153 34.635)" class="u7i0s_bln"/><path class="bj4e0iffm"/><path class="efbw92r2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:coin"} {...others} />);
}

export default Component;
