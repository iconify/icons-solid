import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e18ow5b9y.css';
import '../../css/q/qgvdpubqe.css';
import '../../css/y/y66soqbdl.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e18ow5b9y"/><path clip-rule="evenodd" class="qgvdpubqe"/><path class="y66soqbdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:envelope-open-note-bold"} {...others} />);
}

export default Component;
