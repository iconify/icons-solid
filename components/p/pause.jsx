import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wm9p8zbaz.css';
import '../../css/n/n_d5_ei4i.css';
import '../../css/k/kxw0ombcb.css';
import '../../css/j/jfhdloezs.css';
import '../../css/q/q4beycc6p.css';
import '../../css/z/zy5wd1-0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow wm9p8zbaz"/><path class="n_d5_ei4i"/><path class="kxw0ombcb"/><path class="jfhdloezs"/><path class="q4beycc6p wm-shine"/><path class="wm-deco zy5wd1-0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:pause"} {...others} />);
}

export default Component;
