import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/u/ug889pb4z.css';
import '../../css/l/la2gprkik.css';
import '../../css/y/y_v7yrbcz.css';
import '../../css/w/wndjf-ien.css';
import '../../css/t/twqfu-bhq.css';
import '../../css/e/ex2iovbet.css';
import '../../css/x/xw_hytlun.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ug889pb4z"/><path class="la2gprkik"/><path class="wm-shine y_v7yrbcz"/><path class="wndjf-ien"/><path class="twqfu-bhq"/><path class="ex2iovbet"/><path class="wm-shine xw_hytlun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:armchair"} {...others} />);
}

export default Component;
