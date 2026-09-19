import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/etmiu5b8f.css';
import '../../css/k/kbkqs14yg.css';
import '../../css/r/rl_ivybqz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="printer-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="etmiu5b8f"/><path class="kbkqs14yg"/><path clip-rule="evenodd" class="rl_ivybqz"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:printer-outline"} {...others} />);
}

export default Component;
