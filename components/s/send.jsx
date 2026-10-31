import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r0gic1k_s.css';
import '../../css/c/c49hu9bcc.css';
import '../../css/o/opfx_fqop.css';
import '../../css/m/ma2vtzbfg.css';
import '../../css/s/svq2zrbcq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="r0gic1k_s wm-shadow"/><path class="c49hu9bcc"/><path class="opfx_fqop"/><path class="ma2vtzbfg"/><path class="svq2zrbcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:send"} {...others} />);
}

export default Component;
