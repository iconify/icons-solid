import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t_783rggs.css';
import '../../css/n/n30k0z4xd.css';
import '../../css/i/iyj9s7b1n.css';
import '../../css/u/u740ad0lr.css';
import '../../css/c/ca-2tccjd.css';
import '../../css/a/a56o0f2xp.css';
import '../../css/e/ei2neybzk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="t_783rggs"/><path class="n30k0z4xd"/><path class="iyj9s7b1n"/><path class="u740ad0lr"/><path class="ca-2tccjd"/><path class="a56o0f2xp"/><path class="ei2neybzk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ufo-broken"} {...others} />);
}

export default Component;
