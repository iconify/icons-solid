import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wn8ltlbkj.css';
import '../../css/x/x1va69ceo.css';
import '../../css/f/fe0lorb6j.css';
import '../../css/g/gewiseacf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wn8ltlbkj"/><path clip-rule="evenodd" class="x1va69ceo"/><path clip-rule="evenodd" class="fe0lorb6j"/><path clip-rule="evenodd" class="gewiseacf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-large-outline"} {...others} />);
}

export default Component;
