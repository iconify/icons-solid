import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jo0aru4tr.css';
import '../../css/r/rrxhurnze.css';
import '../../css/t/t_y7u4eyk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jo0aru4tr"/><path class="rrxhurnze"/><path class="t_y7u4eyk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ruler-pen-broken"} {...others} />);
}

export default Component;
