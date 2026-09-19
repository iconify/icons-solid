import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ttr91_bdq.css';
import '../../css/e/ej058uvnm.css';
import '../../css/a/aj56w3bcr.css';
import '../../css/c/c8q8oybma.css';
import '../../css/l/lf4wqjr2e.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ttr91_bdq"/><path class="ej058uvnm"/><path class="aj56w3bcr"/><path clip-rule="evenodd" class="c8q8oybma"/><path class="lf4wqjr2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:scroll-bold"} {...others} />);
}

export default Component;
