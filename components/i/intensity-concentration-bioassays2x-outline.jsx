import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z6u6w0bcv.css';
import '../../css/p/pmuq-u-_h.css';
import '../../css/p/pgan1vb1i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z6u6w0bcv"/><path class="pmuq-u-_h"/><path clip-rule="evenodd" class="pgan1vb1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:intensity-concentration-bioassays2x-outline"} {...others} />);
}

export default Component;
