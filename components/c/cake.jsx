import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/adlmouxhp.css';
import '../../css/t/tzmuo3b3g.css';
import '../../css/k/kezfubblm.css';
import '../../css/l/lc2dgyidq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="adlmouxhp"/><path class="tzmuo3b3g"/><path class="kezfubblm"/><path class="lc2dgyidq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cake"} {...others} />);
}

export default Component;
