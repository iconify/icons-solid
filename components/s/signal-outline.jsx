import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xqahkkbse.css';
import '../../css/z/z3hu4kf3j.css';
import '../../css/e/erw_xjvgp.css';
import '../../css/f/fzz9ru6ak.css';
import '../../css/v/vqmo9wbma.css';
import '../../css/b/bci0-ui2v.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="xqahkkbse"/><path class="z3hu4kf3j"/><path clip-rule="evenodd" class="erw_xjvgp"/><path class="fzz9ru6ak"/><path class="vqmo9wbma"/><path clip-rule="evenodd" class="bci0-ui2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:signal-outline"} {...others} />);
}

export default Component;
