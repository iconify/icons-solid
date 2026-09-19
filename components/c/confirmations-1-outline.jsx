import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/i5_k05bed.css';
import '../../css/w/wns8gdbbc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="i5_k05bed"/><path class="wns8gdbbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:confirmations-1-outline"} {...others} />);
}

export default Component;
