import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/k/kq7md5beb.css';
import '../../css/o/olwy6xb_j.css';
import '../../css/r/rndpdgbhc.css';
import '../../css/s/slzlyzcjl.css';
import '../../css/w/wvwvpobuh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="kq7md5beb"/><path class="olwy6xb_j"/><path class="rndpdgbhc"/><path class="slzlyzcjl"/><path class="wvwvpobuh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:speaker-1"} {...others} />);
}

export default Component;
