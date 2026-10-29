import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jnnjatsfj.css';
import '../../css/p/p5d7lsb9y.css';
import '../../css/l/lv1v3gbnw.css';
import '../../css/g/gtuqeacdg.css';
import '../../css/g/g6la0ca0k.css';
import '../../css/c/cf49srovd.css';
import '../../css/a/ang8pkbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="jnnjatsfj wm-shadow"/><path class="p5d7lsb9y"/><path class="lv1v3gbnw"/><path class="gtuqeacdg"/><path class="g6la0ca0k wm-shine"/><path class="cf49srovd wm-deco"/><path class="ang8pkbsr wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:wrench"} {...others} />);
}

export default Component;
