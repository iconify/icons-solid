import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/lzfl6dbpr.css';
import '../../css/i/i81swrbmc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="lzfl6dbpr"/><path class="i81swrbmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:pie-chart-outline"} {...others} />);
}

export default Component;
