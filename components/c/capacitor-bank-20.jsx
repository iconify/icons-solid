import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2nkytbsr.css';
import '../../css/a/avl1iwbyv.css';
import '../../css/w/w8hasgbum.css';
import '../../css/m/mk8d_vbbu.css';
import '../../css/g/g_tssdnwe.css';
import '../../css/f/f51zeobke.css';
import '../../css/k/klbqivr8h.css';
import '../../css/l/lmnd7uz5z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d2nkytbsr"/><path class="avl1iwbyv"/><path class="w8hasgbum"/><path class="mk8d_vbbu"/><path class="g_tssdnwe"/><path class="f51zeobke"/><path class="klbqivr8h"/><path class="lmnd7uz5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:capacitor-bank-20"} {...others} />);
}

export default Component;
