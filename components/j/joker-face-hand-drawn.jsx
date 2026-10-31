import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgx-1gt4g.css';
import '../../css/n/n0mf0v_wi.css';
import '../../css/x/x1hpb9pnm.css';
import '../../css/m/mp_zb3ocs.css';
import '../../css/h/hq_c9ubcp.css';
import '../../css/o/o1fgh1bya.css';
import '../../css/u/uhsvoxboo.css';

const viewBox = {"width":100,"height":100};
const content = `<path clip-rule="evenodd" class="bgx-1gt4g"/><path clip-rule="evenodd" class="n0mf0v_wi"/><path class="x1hpb9pnm"/><path clip-rule="evenodd" class="mp_zb3ocs"/><path class="hq_c9ubcp"/><path clip-rule="evenodd" class="o1fgh1bya"/><path clip-rule="evenodd" class="uhsvoxboo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:joker-face-hand-drawn"} {...others} />);
}

export default Component;
