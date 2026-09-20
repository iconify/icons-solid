import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n5_fq3thg.css';
import '../../css/v/v7a2u9b3k.css';
import '../../css/e/e0cmz0boh.css';
import '../../css/t/t4qaumccy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="n5_fq3thg"/><path class="v7a2u9b3k"/><path class="e0cmz0boh"/><path class="t4qaumccy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-text-broken"} {...others} />);
}

export default Component;
