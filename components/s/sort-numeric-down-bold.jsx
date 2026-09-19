import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/svg81bcgr.css';
import '../../css/c/clok_hbux.css';
import '../../css/m/mvu50ub7r.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="svg81bcgr"/><path class="clok_hbux"/><path class="mvu50ub7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sort-numeric-down-bold"} {...others} />);
}

export default Component;
