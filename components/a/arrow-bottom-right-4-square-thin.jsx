import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vkur1dxhw.css';
import '../../css/n/nkv190b_p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="vkur1dxhw"/><path class="nkv190b_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:arrow-bottom-right-4-square-thin"} {...others} />);
}

export default Component;
