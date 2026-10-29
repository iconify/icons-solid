import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uyf9d9h9x.css';
import '../../css/i/iy-3dt9ke.css';
import '../../css/u/u0sy4zbmo.css';
import '../../css/y/yj1mcybdn.css';
import '../../css/f/f2t6kttmy.css';
import '../../css/e/ewp57iiuq.css';
import '../../css/v/vozfmpb1j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uyf9d9h9x wm-shadow"/><path class="iy-3dt9ke wm-shadow"/><path class="u0sy4zbmo"/><path class="yj1mcybdn"/><path class="f2t6kttmy"/><path class="ewp57iiuq"/><path class="vozfmpb1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:cookie"} {...others} />);
}

export default Component;
