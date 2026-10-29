import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mn9pxubnm.css';
import '../../css/z/z8on-tbsl.css';
import '../../css/t/tnjxhrbvm.css';
import '../../css/z/ziwvetbrk.css';
import '../../css/y/yp_nbt0hz.css';
import '../../css/d/dhzy_4_sv.css';
import '../../css/t/tvaijfbfh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mn9pxubnm wm-a"/><path class="wm-a z8on-tbsl"/><path class="tnjxhrbvm wm-a"/><path class="wm-k ziwvetbrk"/><path class="wm-k yp_nbt0hz"/><path class="dhzy_4_sv wm-k"/><path class="tvaijfbfh wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:sun"} {...others} />);
}

export default Component;
