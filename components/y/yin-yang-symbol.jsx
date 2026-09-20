import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/avjyt_bax.css';
import '../../css/b/bu2qq0ivx.css';
import '../../css/w/w-gtdgsow.css';
import '../../css/x/xjfc-xbtr.css';
import '../../css/k/k-9zzh2qa.css';
import '../../css/l/ls51x_b0d.css';
import '../../css/h/h6_z89bhx.css';
import '../../css/c/cldzq5t8q.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="avjyt_bax"/><path class="bu2qq0ivx"/><path class="w-gtdgsow"/><path class="xjfc-xbtr"/><path class="k-9zzh2qa"/><path class="ls51x_b0d"/><path class="h6_z89bhx"/><path class="cldzq5t8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:yin-yang-symbol"} {...others} />);
}

export default Component;
