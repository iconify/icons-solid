import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/m_fi2yboy.css';
import '../../css/f/fwu15-bda.css';
import '../../css/i/i6d1ue_zn.css';
import '../../css/e/esdlk4bve.css';
import '../../css/k/kmhs3qb3e.css';
import '../../css/f/f2nb1t2tq.css';
import '../../css/p/puntlw3rq.css';
import '../../css/c/cf49srovd.css';
import '../../css/a/ang8pkbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="m_fi2yboy wm-shadow"/><path class="fwu15-bda"/><path class="i6d1ue_zn"/><path class="esdlk4bve"/><path class="kmhs3qb3e wm-s"/><path class="f2nb1t2tq wm-s"/><path class="puntlw3rq wm-s"/><path class="cf49srovd wm-deco"/><path class="ang8pkbsr wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:remote-control"} {...others} />);
}

export default Component;
