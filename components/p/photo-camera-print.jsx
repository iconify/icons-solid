import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rm40z8n3v.css';
import '../../css/j/j0s5_rbqo.css';
import '../../css/p/pv_i1jaoc.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="rm40z8n3v"/><path clip-rule="evenodd" class="j0s5_rbqo"/><path clip-rule="evenodd" class="pv_i1jaoc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:photo-camera-print"} {...others} />);
}

export default Component;
