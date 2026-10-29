import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a9obmibqx.css';
import '../../css/o/otnvh2czj.css';
import '../../css/x/xrz3v1i9q.css';
import '../../css/f/fgpkdnb9c.css';
import '../../css/m/mmzourstz.css';
import '../../css/y/y22gipb0r.css';
import '../../css/g/gjb_m9bns.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="a9obmibqx"/><path class="otnvh2czj wm-k"/><path class="wm-k xrz3v1i9q"/><path class="fgpkdnb9c wm-k"/><path class="mmzourstz wm-a"/><path class="wm-a y22gipb0r"/><path class="gjb_m9bns wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sleigh-sketch"} {...others} />);
}

export default Component;
