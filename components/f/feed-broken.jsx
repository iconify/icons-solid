import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/exetrlbof.css';
import '../../css/j/jj-1tvbjg.css';
import '../../css/u/uzjqjlk8c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="exetrlbof"/><path class="jj-1tvbjg"/><path class="uzjqjlk8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:feed-broken"} {...others} />);
}

export default Component;
