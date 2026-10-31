import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ggqkbkl6h.css';
import '../../css/h/hts0o1y8r.css';
import '../../css/q/qq3w6ubvs.css';
import '../../css/g/gy7h6zb6b.css';
import '../../css/m/mpezmbcwx.css';
import '../../css/v/v-z76oatv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ggqkbkl6h wm-shadow"/><path class="hts0o1y8r wm-k"/><path class="qq3w6ubvs wm-k"/><path class="gy7h6zb6b wm-k"/><path class="mpezmbcwx wm-k"/><path class="v-z76oatv wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:loader-circle"} {...others} />);
}

export default Component;
