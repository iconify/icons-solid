import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/tasj6fszi.css';
import '../../css/m/mvdztivko.css';
import '../../css/n/n0azeg45d.css';
import '../../css/y/yujhfmaig.css';
import '../../css/m/mwstojo0d.css';
import '../../css/q/qkm1unb_m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="tasj6fszi wm-shadow"/><path class="mvdztivko"/><path class="n0azeg45d"/><path class="yujhfmaig"/><path class="mwstojo0d wm-shine"/><path class="qkm1unb_m wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:waves"} {...others} />);
}

export default Component;
