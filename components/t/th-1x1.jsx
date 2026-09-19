import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uh_bsl15p.css';
import '../../css/p/pamw94bod.css';
import '../../css/t/tm-lwkblw.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="d2kvgvbvc"><path class="uh_bsl15p"/><path class="pamw94bod"/><path class="tm-lwkblw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:th-1x1"} {...others} />);
}

export default Component;
