import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/og221kbbq.css';
import '../../css/k/kix828xle.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="og221kbbq secondary"/><path class="kix828xle primary"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ai-write-duotone"} {...others} />);
}

export default Component;
