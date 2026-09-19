import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ch1v3-bgw.css';
import '../../css/a/aev7hacfv.css';
import '../../css/k/kue5013mz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="ch1v3-bgw"/><path class="aev7hacfv"/><path class="kue5013mz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:traumatism"} {...others} />);
}

export default Component;
