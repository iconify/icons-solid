import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l6fn0fb1j.css';
import '../../css/h/h-h-argoo.css';
import '../../css/t/t4pfqyh0j.css';
import '../../css/p/pwzfsvbhy.css';
import '../../css/u/uhrw3qnle.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="l6fn0fb1j"/><path class="h-h-argoo"/><path class="t4pfqyh0j"/><path class="pwzfsvbhy"/><path class="uhrw3qnle"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clapperboard-open-play-line-duotone"} {...others} />);
}

export default Component;
