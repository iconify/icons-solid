import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yye54xbit.css';
import '../../css/r/r_qdkuptq.css';
import '../../css/j/jk79u8b5k.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="yye54xbit"/><path class="r_qdkuptq"/><path class="jk79u8b5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:scroll-old-duo"} {...others} />);
}

export default Component;
