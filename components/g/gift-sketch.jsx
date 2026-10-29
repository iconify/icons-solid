import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u-2zzdyrk.css';
import '../../css/r/rmzvr0rnp.css';
import '../../css/l/lvpeqwbwj.css';
import '../../css/l/ldqvx2utm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="u-2zzdyrk"/><path class="rmzvr0rnp wm-a"/><path class="lvpeqwbwj wm-k"/><path class="ldqvx2utm wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gift-sketch"} {...others} />);
}

export default Component;
