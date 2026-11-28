import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/giodqit_k.css';
import '../../css/n/nqwo123ng.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="giodqit_k secondary"/><path class="nqwo123ng primary"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:tumbler-duotone"} {...others} />);
}

export default Component;
