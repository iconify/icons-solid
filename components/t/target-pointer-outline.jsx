import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u3gipu1po.css';
import '../../css/y/y8h6vn74e.css';
import '../../css/w/wvus26bbw.css';
import '../../css/j/jhzbhlbgi.css';
import '../../css/p/p3smhmbat.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u3gipu1po"/><path class="y8h6vn74e"/><path class="wvus26bbw"/><path class="jhzbhlbgi"/><path class="p3smhmbat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:target-pointer-outline"} {...others} />);
}

export default Component;
