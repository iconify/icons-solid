import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/zvnn-qbqo.css';
import '../../css/l/lhyolnqbd.css';
import '../../css/h/hz-7ntbya.css';
import '../../css/v/vbdxq5bhf.css';
import '../../css/p/p3p5zfq1s.css';
import '../../css/h/hw0l3b_4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow zvnn-qbqo"/><path class="lhyolnqbd"/><path class="hz-7ntbya"/><path class="vbdxq5bhf"/><path class="p3p5zfq1s wm-shine"/><path class="hw0l3b_4d wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:forward"} {...others} />);
}

export default Component;
