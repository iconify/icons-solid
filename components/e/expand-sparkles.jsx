import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m00vrlbwa.css';
import '../../css/z/zsg-tdpur.css';
import '../../css/c/cmr_s5b5w.css';
import '../../css/s/srf3kqv0d.css';
import '../../css/r/rzfejv30l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="m00vrlbwa"/><path class="zsg-tdpur"/><path class="cmr_s5b5w"/><path class="srf3kqv0d"/><path class="rzfejv30l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:expand-sparkles"} {...others} />);
}

export default Component;
