import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rvk381uki.css';
import '../../css/m/mkpdx5y1s.css';
import '../../css/v/vhralebuw.css';
import '../../css/v/veqjqsb_i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rvk381uki"/><path class="mkpdx5y1s"/><path class="vhralebuw"/><path class="veqjqsb_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ghost-smile-bold-duotone"} {...others} />);
}

export default Component;
