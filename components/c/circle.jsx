import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/ws6cwcc1b.css';
import '../../css/j/jwuhmv1hh.css';
import '../../css/j/jnef1rbth.css';
import '../../css/m/mf3mt1byo.css';
import '../../css/z/zan5o5unk.css';
import '../../css/k/krc92ac8h.css';
import '../../css/q/qhizo-b6l.css';
import '../../css/c/ci3edjb_i.css';
import '../../css/p/p-bm7lbqr.css';
import '../../css/d/dkvqudjdz.css';
import '../../css/y/ynabl2-tk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow ws6cwcc1b"/><path class="jwuhmv1hh"/><path class="jnef1rbth"/><path class="mf3mt1byo"/><path class="zan5o5unk"/><path class="krc92ac8h"/><path class="qhizo-b6l"/><path class="ci3edjb_i"/><path class="p-bm7lbqr"/><path class="dkvqudjdz wm-shine"/><path class="wm-shine ynabl2-tk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:circle"} {...others} />);
}

export default Component;
