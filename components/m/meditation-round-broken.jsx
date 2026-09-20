import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v6pzvpfzc.css';
import '../../css/d/dr7ufyt3p.css';
import '../../css/n/n2fu-sj-y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="v6pzvpfzc"/><path class="dr7ufyt3p"/><path class="n2fu-sj-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:meditation-round-broken"} {...others} />);
}

export default Component;
