import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/pqarqgb7c.css';
import '../../css/h/h609y5yoa.css';
import '../../css/i/izceeac7a.css';
import '../../css/r/r5ke5gbow.css';
import '../../css/t/tiotqbcax.css';
import '../../css/f/fpcu0ebnk.css';
import '../../css/t/t4y3kgbcn.css';
import '../../css/e/ef_1sz56w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="pqarqgb7c wm-shadow"/><path class="h609y5yoa"/><path class="izceeac7a"/><path class="r5ke5gbow"/><path class="tiotqbcax wm-shine"/><path class="fpcu0ebnk wm-s"/><path class="t4y3kgbcn wm-s"/><path class="ef_1sz56w wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:user-heart"} {...others} />);
}

export default Component;
