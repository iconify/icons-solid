import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tzrmuh6oi.css';
import '../../css/i/ite9z1bgd.css';
import '../../css/z/z4sp6ccuh.css';
import '../../css/w/w4vpn2hmp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="tzrmuh6oi"/><path class="ite9z1bgd"/><path class="z4sp6ccuh"/><path class="w4vpn2hmp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:diploma-verified-bold-duotone"} {...others} />);
}

export default Component;
