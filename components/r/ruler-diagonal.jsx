import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fnklneb_k.css';
import '../../css/k/kiol6ablm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><rect transform="rotate(45 15.712 1.924)" class="fnklneb_k"/><path class="kiol6ablm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:ruler-diagonal"} {...others} />);
}

export default Component;
