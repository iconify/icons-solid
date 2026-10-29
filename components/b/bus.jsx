import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/sebgi1r_i.css';
import '../../css/a/a_bxqhb7n.css';
import '../../css/l/l89fqm6hk.css';
import '../../css/j/jxq7aoydz.css';
import '../../css/q/q24kfywwu.css';
import '../../css/f/f42zhqpwx.css';
import '../../css/v/v17pegbsy.css';
import '../../css/e/ezf4ijb_t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="sebgi1r_i wm-shadow"/><path class="a_bxqhb7n"/><path class="l89fqm6hk"/><path class="jxq7aoydz"/><path class="q24kfywwu"/><path class="f42zhqpwx wm-shine"/><path class="v17pegbsy wm-deco"/><path class="ezf4ijb_t wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:bus"} {...others} />);
}

export default Component;
