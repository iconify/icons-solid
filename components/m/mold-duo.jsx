import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wpmummbxh.css';
import '../../css/y/yoa2b53_o.css';
import '../../css/d/dnua4t4hy.css';
import '../../css/c/ceimyk5qg.css';
import '../../css/s/sc4tpsbdd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="wpmummbxh"/><path class="yoa2b53_o"/><path class="dnua4t4hy"/><path class="ceimyk5qg"/><path class="sc4tpsbdd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:mold-duo"} {...others} />);
}

export default Component;
