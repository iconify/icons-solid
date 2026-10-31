import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qm6ot8btb.css';
import '../../css/s/s6k6-acrz.css';
import '../../css/u/u6jhewgbx.css';
import '../../css/r/rvwtt-o0p.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="qm6ot8btb wm-shadow"/><path class="s6k6-acrz wm-shadow"/><path class="u6jhewgbx"/><path class="rvwtt-o0p"/><path class="vvx5zcbvx wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:timer-off"} {...others} />);
}

export default Component;
