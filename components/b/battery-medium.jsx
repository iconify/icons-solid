import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/ue80sdz-h.css';
import '../../css/s/sga7wtbtc.css';
import '../../css/v/v63ah-ban.css';
import '../../css/k/kaes12bcm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ue80sdz-h"/><path class="sga7wtbtc"/><path class="v63ah-ban"/><path class="kaes12bcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:battery-medium"} {...others} />);
}

export default Component;
