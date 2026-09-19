import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vkur1dxhw.css';
import '../../css/t/tm6t7bb_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="vkur1dxhw"/><path class="tm6t7bb_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:arrow-left-4-square-thin"} {...others} />);
}

export default Component;
