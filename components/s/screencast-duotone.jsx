import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o7swlumbk.css';
import '../../css/n/nnc-1xlhc.css';
import '../../css/r/rsi8w8bdx.css';
import '../../css/c/cur694b4x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="o7swlumbk"/><path class="nnc-1xlhc"/><path class="rsi8w8bdx"/><path class="cur694b4x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:screencast-duotone"} {...others} />);
}

export default Component;
