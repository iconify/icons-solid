import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/t/tw30_ubet.css';
import '../../css/y/yic1xvbbc.css';
import '../../css/x/x5ttklskq.css';
import '../../css/k/kvbvjnede.css';
import '../../css/z/zcj-q1b3f.css';
import '../../css/n/n2es1nbuz.css';
import '../../css/h/hhi9k4bqd.css';
import '../../css/s/s8xjouf5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="h_tsn8bxt"/><path class="tw30_ubet"/><path class="yic1xvbbc"/><path class="x5ttklskq"/><path class="kvbvjnede"/><path class="zcj-q1b3f"/><path class="n2es1nbuz"/><path class="hhi9k4bqd"/><path class="s8xjouf5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:black-hole-line-duotone"} {...others} />);
}

export default Component;
