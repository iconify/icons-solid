import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hk_p5eb7q.css';
import '../../css/i/iyx8f-bpa.css';
import '../../css/l/lh_-7vbqc.css';
import '../../css/c/cbyi9obzv.css';
import '../../css/q/qe6u0hb5y.css';
import '../../css/j/jrzuh-bne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hk_p5eb7q wm-shadow"/><path class="iyx8f-bpa"/><path class="lh_-7vbqc"/><path class="cbyi9obzv"/><path class="qe6u0hb5y"/><path class="jrzuh-bne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:battery-full"} {...others} />);
}

export default Component;
