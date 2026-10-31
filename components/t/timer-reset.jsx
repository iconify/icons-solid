import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/swq1cac2b.css';
import '../../css/n/nlrvbri-s.css';
import '../../css/a/a18dgsisi.css';
import '../../css/u/u_9z9rbvs.css';
import '../../css/b/bdc65ubcx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="swq1cac2b wm-shadow"/><path class="nlrvbri-s"/><path class="a18dgsisi"/><path class="u_9z9rbvs"/><path class="bdc65ubcx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:timer-reset"} {...others} />);
}

export default Component;
