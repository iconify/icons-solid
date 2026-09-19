import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/srwjtlbzk.css';
import '../../css/i/i8m-_o_lx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="srwjtlbzk"/><path class="i8m-_o_lx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:moon-outline"} {...others} />);
}

export default Component;
