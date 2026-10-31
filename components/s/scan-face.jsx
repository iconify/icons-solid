import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a2_8s3bfw.css';
import '../../css/m/m5pxcxkki.css';
import '../../css/y/ynudp_vpq.css';
import '../../css/l/l97em6sxe.css';
import '../../css/s/suht6v68q.css';
import '../../css/r/rfbtfgbye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="a2_8s3bfw wm-shadow"/><path class="m5pxcxkki"/><path class="ynudp_vpq"/><path class="l97em6sxe"/><path class="suht6v68q"/><path class="rfbtfgbye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:scan-face"} {...others} />);
}

export default Component;
