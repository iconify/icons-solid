import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h7tub3zqh.css';
import '../../css/r/rza32tfef.css';
import '../../css/k/khe_6c_pj.css';
import '../../css/d/d9-olkb3q.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h7tub3zqh"/><path class="rza32tfef"/><path clip-rule="evenodd" class="khe_6c_pj"/><path class="d9-olkb3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tree-bold"} {...others} />);
}

export default Component;
