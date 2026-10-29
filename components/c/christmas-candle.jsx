import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hzqalbb-i.css';
import '../../css/k/k5k2babgs.css';
import '../../css/t/t4qb0_brb.css';
import '../../css/y/yea3ygbvh.css';
import '../../css/d/d93b_ub2z.css';
import '../../css/q/q83gx0b-s.css';
import '../../css/b/bdavckvaj.css';
import '../../css/u/ulgvnkbmd.css';
import '../../css/t/tv5yr4beu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="hzqalbb-i wm-shadow"/><path class="k5k2babgs"/><path class="t4qb0_brb"/><path class="yea3ygbvh"/><path class="d93b_ub2z"/><path class="q83gx0b-s wm-shine"/><path class="bdavckvaj wm-s"/><path class="ulgvnkbmd wm-s"/><path class="tv5yr4beu wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:christmas-candle"} {...others} />);
}

export default Component;
