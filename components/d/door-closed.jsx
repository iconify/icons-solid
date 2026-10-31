import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qma3yg2km.css';
import '../../css/i/iwd93nbob.css';
import '../../css/a/a40pwqb_z.css';
import '../../css/e/e7q-pgwti.css';
import '../../css/k/kxoj3_boy.css';
import '../../css/l/lhmgo7gmy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="qma3yg2km wm-shadow"/><path class="iwd93nbob"/><path class="a40pwqb_z"/><path class="e7q-pgwti"/><path class="kxoj3_boy"/><path class="lhmgo7gmy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:door-closed"} {...others} />);
}

export default Component;
