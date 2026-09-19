import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i8g6xo_pu.css';
import '../../css/t/tfng0xpse.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="i8g6xo_pu"/><path class="tfng0xpse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:dots-y-print"} {...others} />);
}

export default Component;
