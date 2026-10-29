import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/l7xkddbwv.css';
import '../../css/n/nng5iyb4r.css';
import '../../css/e/ewh1o9b7q.css';
import '../../css/q/qfv9f2nln.css';
import '../../css/t/tn2tgeiqu.css';
import '../../css/j/jm2f1rbcj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="l7xkddbwv wm-shadow"/><path class="nng5iyb4r"/><path class="ewh1o9b7q"/><path class="qfv9f2nln"/><path class="tn2tgeiqu wm-shine"/><path class="jm2f1rbcj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:id-card"} {...others} />);
}

export default Component;
