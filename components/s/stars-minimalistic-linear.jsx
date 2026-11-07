import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/e/e_5b2ub9c.css';
import '../../css/e/et9k69bbo.css';
import '../../css/p/p9t5yfbwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="e_5b2ub9c"/><path class="et9k69bbo"/><path class="p9t5yfbwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stars-minimalistic-linear"} {...others} />);
}

export default Component;
