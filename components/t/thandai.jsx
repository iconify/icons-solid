import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/yyaf2v41w.css';
import '../../css/y/y4ls5hqxg.css';
import '../../css/u/u1ot37j5w.css';
import '../../css/u/uupws9g4o.css';
import '../../css/e/emyvnxb1u.css';
import '../../css/n/n5euzsb_x.css';
import '../../css/n/nju6m-1cm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow yyaf2v41w"/><path class="y4ls5hqxg"/><path class="u1ot37j5w"/><path class="uupws9g4o"/><path class="emyvnxb1u"/><path class="n5euzsb_x wm-shine"/><path class="nju6m-1cm wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:thandai"} {...others} />);
}

export default Component;
