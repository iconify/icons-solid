import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/j9ev1acjh.css';
import '../../css/t/t6e3yowpr.css';
import '../../css/b/be6z48iui.css';
import '../../css/i/iqgbx_ojc.css';
import '../../css/y/y6r-hjbwo.css';
import '../../css/w/wv5esypgp.css';
import '../../css/q/q9fsdgx4f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="j9ev1acjh wm-shadow"/><path class="t6e3yowpr"/><path class="be6z48iui"/><path class="iqgbx_ojc"/><path class="y6r-hjbwo"/><path class="wm-shine wv5esypgp"/><path class="q9fsdgx4f wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:watch"} {...others} />);
}

export default Component;
