import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b9h890bco.css';
import '../../css/a/asj_clbhe.css';
import '../../css/z/z9o4zrboc.css';
import '../../css/r/rrc-v5ytu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b9h890bco wm-shadow"/><path class="asj_clbhe"/><path class="z9o4zrboc"/><path class="rrc-v5ytu wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:sunset"} {...others} />);
}

export default Component;
