import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5-jv8tpz.css';
import '../../css/j/j61y16btl.css';
import '../../css/l/lv59_xedq.css';
import '../../css/j/j15fg8b5j.css';
import '../../css/l/l4qf8vk5b.css';
import '../../css/q/q24ku8b4a.css';
import '../../css/b/b_qxs4bdi.css';
import '../../css/m/miv2kautb.css';
import '../../css/b/b2x085czb.css';
import '../../css/p/peejenwcc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="u5-jv8tpz"/><path clip-rule="evenodd" class="j61y16btl"/><path class="lv59_xedq"/><path clip-rule="evenodd" class="j15fg8b5j"/><path clip-rule="evenodd" class="l4qf8vk5b"/><path class="q24ku8b4a"/><path clip-rule="evenodd" class="b_qxs4bdi"/><path class="miv2kautb"/><path clip-rule="evenodd" class="b2x085czb"/><path clip-rule="evenodd" class="peejenwcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:flushed-outline"} {...others} />);
}

export default Component;
