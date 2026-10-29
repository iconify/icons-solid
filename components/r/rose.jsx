import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/yqlc1pb6g.css';
import '../../css/t/tqjkkrd1u.css';
import '../../css/u/u0oyt6bbj.css';
import '../../css/l/lmskqtbkk.css';
import '../../css/d/d_k58byaf.css';
import '../../css/g/g_nw7bcew.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow yqlc1pb6g"/><path class="tqjkkrd1u"/><path class="u0oyt6bbj"/><path class="lmskqtbkk"/><path class="d_k58byaf"/><path class="g_nw7bcew wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:rose"} {...others} />);
}

export default Component;
