import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ij_vp4bfu.css';
import '../../css/i/i8qlvuc_m.css';
import '../../css/j/j7mp31bjk.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ij_vp4bfu"/><path class="i8qlvuc_m"/><path class="j7mp31bjk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:book-bold"} {...others} />);
}

export default Component;
