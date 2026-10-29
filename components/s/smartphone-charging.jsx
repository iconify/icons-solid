import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wxljbybpb.css';
import '../../css/b/bcfuosq3a.css';
import '../../css/w/wg409aber.css';
import '../../css/i/iwkgc5m0z.css';
import '../../css/p/phorssbfd.css';
import '../../css/q/qdjw_wbvr.css';
import '../../css/t/tz2gidcqy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k wxljbybpb"/><path class="bcfuosq3a wm-k"/><path class="wg409aber wm-k"/><path class="iwkgc5m0z wm-shine"/><path class="phorssbfd wm-s"/><path class="qdjw_wbvr wm-s"/><path class="tz2gidcqy wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:smartphone-charging"} {...others} />);
}

export default Component;
