import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cmgug8buf.css';
import '../../css/o/oi05a2ber.css';
import '../../css/l/l8tly8qyl.css';
import '../../css/z/zbtv54bfy.css';
import '../../css/o/o54uo2boo.css';
import '../../css/m/mzoqjb-lk.css';
import '../../css/f/fytmqle-a.css';
import '../../css/n/ncogbacak.css';
import '../../css/q/q0kx59b4m.css';
import '../../css/j/jxpipkbmu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cmgug8buf wm-shadow"/><path class="oi05a2ber wm-shadow"/><path class="l8tly8qyl"/><path class="zbtv54bfy"/><path class="o54uo2boo"/><path class="mzoqjb-lk"/><path class="fytmqle-a"/><path class="ncogbacak wm-shine"/><path class="q0kx59b4m wm-shine"/><path class="jxpipkbmu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:maximize"} {...others} />);
}

export default Component;
