import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hd-s4vbpt.css';
import '../../css/u/uzp8_bcvb.css';
import '../../css/i/ikr5ohbyg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hd-s4vbpt"/><path class="uzp8_bcvb"/><path clip-rule="evenodd" class="ikr5ohbyg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:loudly-crying2x-outline"} {...others} />);
}

export default Component;
