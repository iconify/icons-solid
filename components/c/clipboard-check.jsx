import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jzwkv4bnr.css';
import '../../css/i/ifj46hwma.css';
import '../../css/d/dalt38r3y.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jzwkv4bnr"/><path class="ifj46hwma"/><path clip-rule="evenodd" class="dalt38r3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:clipboard-check"} {...others} />);
}

export default Component;
