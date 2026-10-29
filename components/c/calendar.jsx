import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/le-opqi_v.css';
import '../../css/p/p9fzgibwz.css';
import '../../css/n/nd2wmlbbp.css';
import '../../css/j/jtu6rmbup.css';
import '../../css/x/x-edljbui.css';
import '../../css/u/uvlxbpwvl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="le-opqi_v wm-shadow"/><path class="p9fzgibwz"/><path class="nd2wmlbbp"/><path class="jtu6rmbup"/><path class="wm-shine x-edljbui"/><path class="uvlxbpwvl wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:calendar"} {...others} />);
}

export default Component;
