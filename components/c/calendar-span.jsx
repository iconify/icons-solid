import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cf7nx1v6t.css';
import '../../css/n/ng1w20v5k.css';
import '../../css/l/lj6dfgbvz.css';
import '../../css/e/eux2od3_k.css';
import '../../css/l/ltsoklbui.css';
import '../../css/q/qlfh8bpxb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="cf7nx1v6t wm-shadow"/><path class="ng1w20v5k"/><path class="lj6dfgbvz"/><path class="eux2od3_k"/><path class="ltsoklbui"/><path class="qlfh8bpxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:calendar-span"} {...others} />);
}

export default Component;
