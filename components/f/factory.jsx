import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/yzgsdwb9k.css';
import '../../css/h/htx5cbclt.css';
import '../../css/n/nbwn2qbqq.css';
import '../../css/b/bvbo823rx.css';
import '../../css/u/u8oyurbro.css';
import '../../css/t/tj8yb2uwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow yzgsdwb9k"/><path class="htx5cbclt"/><path class="nbwn2qbqq"/><path class="bvbo823rx"/><path class="u8oyurbro wm-shine"/><path class="tj8yb2uwc wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:factory"} {...others} />);
}

export default Component;
