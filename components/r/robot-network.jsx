import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lrbtylblu.css';
import '../../css/g/g-gal1bid.css';
import '../../css/i/imsp1wtjh.css';
import '../../css/a/akm-bcc5g.css';
import '../../css/y/y7_hzeb-a.css';
import '../../css/l/ldkqnv2uc.css';
import '../../css/w/wmsglmbss.css';
import '../../css/r/r6vz2-0gm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="lrbtylblu"/><path class="g-gal1bid"/><path class="imsp1wtjh"/><path class="akm-bcc5g"/><path class="y7_hzeb-a"/><path class="ldkqnv2uc"/><path class="wmsglmbss"/><path class="r6vz2-0gm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:robot-network"} {...others} />);
}

export default Component;
