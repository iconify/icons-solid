import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nyrc-obve.css';
import '../../css/m/m9a7o7bjv.css';
import '../../css/j/jtpb_qbov.css';
import '../../css/n/n88ypku5p.css';
import '../../css/d/dr4go41zt.css';
import '../../css/v/v3u-ljbor.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="nyrc-obve"/><path class="m9a7o7bjv"/><path class="jtpb_qbov"/><path class="n88ypku5p"/><path class="dr4go41zt"/><path class="v3u-ljbor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:deeplink"} {...others} />);
}

export default Component;
