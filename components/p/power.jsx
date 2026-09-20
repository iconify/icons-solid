import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/g/g_dkpuykv.css';
import '../../css/n/n8b-tgbus.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="g_dkpuykv"/><path class="n8b-tgbus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:power"} {...others} />);
}

export default Component;
