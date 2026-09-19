import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/f/f2gi23jtg.css';
import '../../css/u/u1q7wbbza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="f2gi23jtg"/><path class="u1q7wbbza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:confirmations-2-outline"} {...others} />);
}

export default Component;
