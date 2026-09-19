import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h2r9s7v-s.css';
import '../../css/r/rpxk0yble.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="h2r9s7v-s"/><path clip-rule="evenodd" class="rpxk0yble"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:pharmacy-1-bold"} {...others} />);
}

export default Component;
