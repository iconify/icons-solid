import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/ps7dry6or.css';
import '../../css/u/u1ny42dfv.css';
import '../../css/v/vlev-4bxg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ps7dry6or"/><path class="u1ny42dfv"/><path class="vlev-4bxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:slider-vertical-minimalistic-broken"} {...others} />);
}

export default Component;
