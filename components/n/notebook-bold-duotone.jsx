import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pfjg_pboc.css';
import '../../css/x/xmtv_m_5x.css';
import '../../css/g/gy5agkitl.css';
import '../../css/e/etm4r5s3x.css';
import '../../css/q/q90ux4a1y.css';
import '../../css/k/kyb7ylb4r.css';
import '../../css/j/jdyfkwtit.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pfjg_pboc"/><path class="xmtv_m_5x"/><path class="gy5agkitl"/><path class="etm4r5s3x"/><path class="q90ux4a1y"/><path class="kyb7ylb4r"/><path class="jdyfkwtit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notebook-bold-duotone"} {...others} />);
}

export default Component;
