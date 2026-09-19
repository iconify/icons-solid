import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j2fdhp6zb.css';
import '../../css/u/u7qllch4d.css';
import '../../css/g/g_ap0obtx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="j2fdhp6zb"/><path class="u7qllch4d"/><path class="g_ap0obtx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bitcoin-withdraw"} {...others} />);
}

export default Component;
