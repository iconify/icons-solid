import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/r1aq4v0kw.css';
import '../../css/b/b6mlsub7h.css';
import '../../css/o/o16saib_v.css';
import '../../css/t/tbqevac0d.css';
import '../../css/l/lk17kwthj.css';
import '../../css/d/dt183mbmv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="r1aq4v0kw wm-shadow"/><path class="b6mlsub7h"/><path class="o16saib_v"/><path class="tbqevac0d"/><path class="lk17kwthj wm-shine"/><path class="dt183mbmv wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:square-dashed"} {...others} />);
}

export default Component;
