import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l-ewhbbna.css';
import '../../css/y/yzju0ddfv.css';
import '../../css/c/ck_861txb.css';
import '../../css/i/iy6_-lbtq.css';
import '../../css/y/ygwh8dy6j.css';
import '../../css/y/yj8xc5buy.css';
import '../../css/k/keev7qklq.css';
import '../../css/s/sqlufdbvr.css';
import '../../css/r/rn7p67zgl.css';
import '../../css/x/xex5ls9rq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l-ewhbbna wm-shadow"/><path class="wm-shadow yzju0ddfv"/><path class="ck_861txb"/><path class="iy6_-lbtq"/><path class="ygwh8dy6j"/><path class="yj8xc5buy"/><path class="keev7qklq wm-shine"/><path class="sqlufdbvr wm-shine"/><path class="rn7p67zgl"/><path class="xex5ls9rq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:surprised"} {...others} />);
}

export default Component;
