import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x6rv0xb3c.css';
import '../../css/l/leqow3bez.css';
import '../../css/v/v_v3yjbcm.css';
import '../../css/g/gb_fuu_vh.css';
import '../../css/x/x3ln7_bqv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow x6rv0xb3c"/><path class="leqow3bez"/><path class="v_v3yjbcm"/><path class="gb_fuu_vh"/><path class="x3ln7_bqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:car"} {...others} />);
}

export default Component;
