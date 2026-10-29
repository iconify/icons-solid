import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/imu2sccys.css';
import '../../css/b/bmd3pgbof.css';
import '../../css/a/a6lt9wbyk.css';
import '../../css/l/lm4f5pb4c.css';
import '../../css/a/aejpc4hlz.css';
import '../../css/j/jp6-iyb4f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="imu2sccys"/><path class="bmd3pgbof wm-k"/><path class="a6lt9wbyk wm-k"/><path class="lm4f5pb4c wm-a"/><path class="aejpc4hlz wm-a"/><path class="jp6-iyb4f wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shankh-sketch"} {...others} />);
}

export default Component;
