import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xqahkkbse.css';
import '../../css/z/z3hu4kf3j.css';
import '../../css/x/xxr0gzb1n.css';
import '../../css/f/fzz9ru6ak.css';
import '../../css/v/vqmo9wbma.css';
import '../../css/h/h7obcwbxd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="xqahkkbse"/><path class="z3hu4kf3j"/><path clip-rule="evenodd" class="xxr0gzb1n"/><path class="fzz9ru6ak"/><path class="vqmo9wbma"/><path clip-rule="evenodd" class="h7obcwbxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:stream-outline"} {...others} />);
}

export default Component;
