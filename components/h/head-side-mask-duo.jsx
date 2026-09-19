import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c772vbbis.css';
import '../../css/l/l6j9zy5iy.css';
import '../../css/p/p2-tfdcvk.css';
import '../../css/g/geakzybqh.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="c772vbbis"/><path class="l6j9zy5iy"/><path class="p2-tfdcvk"/><path class="geakzybqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:head-side-mask-duo"} {...others} />);
}

export default Component;
