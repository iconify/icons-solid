import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c-3yxwbvg.css';
import '../../css/f/f0l3_nh-t.css';
import '../../css/y/ybenv9bfs.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="c-3yxwbvg"/><path class="f0l3_nh-t"/><path class="ybenv9bfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:shopping-bags-duo"} {...others} />);
}

export default Component;
