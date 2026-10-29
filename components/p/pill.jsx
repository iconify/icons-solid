import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/e/ew4n70byq.css';
import '../../css/g/g__swgbpf.css';
import '../../css/v/vtu_q874w.css';
import '../../css/w/wedikhbjx.css';
import '../../css/k/ksot9-z5j.css';
import '../../css/r/rb-cwab5z.css';
import '../../css/e/eb7vxbral.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ew4n70byq wm-shadow"/><path class="g__swgbpf"/><path class="vtu_q874w"/><path class="wedikhbjx"/><path class="ksot9-z5j wm-shine"/><path class="rb-cwab5z wm-deco"/><path class="eb7vxbral wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:pill"} {...others} />);
}

export default Component;
