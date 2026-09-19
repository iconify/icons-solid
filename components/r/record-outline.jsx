import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a4y7rqb1n.css';
import '../../css/e/e6qicfbfp.css';
import '../../css/f/ftyot39ay.css';
import '../../css/k/kz0_pvboy.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="a4y7rqb1n"/><path class="e6qicfbfp"/><path class="ftyot39ay"/><path class="kz0_pvboy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:record-outline"} {...others} />);
}

export default Component;
