import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/rpztg7bea.css';
import '../../css/c/cmthnc71r.css';
import '../../css/e/enk71qo8h.css';
import '../../css/j/jzstwbbwk.css';
import '../../css/b/bgdbrekwy.css';
import '../../css/n/nvf1qccee.css';
import '../../css/o/ocn8myoqn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="rpztg7bea wm-shadow"/><path class="cmthnc71r"/><path class="enk71qo8h"/><path class="jzstwbbwk"/><path class="bgdbrekwy wm-shine"/><path class="nvf1qccee wm-deco"/><path class="ocn8myoqn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:split"} {...others} />);
}

export default Component;
