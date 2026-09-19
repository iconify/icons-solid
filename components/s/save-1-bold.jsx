import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hpkhd7pvn.css';
import '../../css/l/lf3y5v97k.css';
import '../../css/b/bqwtorbgd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="hpkhd7pvn"/><path clip-rule="evenodd" class="lf3y5v97k"/><path class="bqwtorbgd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:save-1-bold"} {...others} />);
}

export default Component;
