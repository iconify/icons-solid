import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/onyi1eb3m.css';
import '../../css/m/mhz-zfunq.css';
import '../../css/p/pn30itlvh.css';
import '../../css/u/u2a5febix.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="onyi1eb3m"/><path class="mhz-zfunq"/><path class="pn30itlvh"/><path class="u2a5febix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:microscope-with-specimen2x-outline"} {...others} />);
}

export default Component;
