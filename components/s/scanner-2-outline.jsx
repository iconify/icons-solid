import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u_3psfbjy.css';
import '../../css/v/vtko2zsbn.css';
import '../../css/l/lhmh8-61s.css';
import '../../css/m/mrbd1vqmu.css';
import '../../css/l/l-i-4twyo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="u_3psfbjy"/><path class="vtko2zsbn"/><path class="lhmh8-61s"/><path class="mrbd1vqmu"/><path class="l-i-4twyo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:scanner-2-outline"} {...others} />);
}

export default Component;
