import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eh_c7sarm.css';
import '../../css/v/v3_lwedaq.css';
import '../../css/i/ip1_kj23x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="eh_c7sarm"/><path class="v3_lwedaq"/><path class="ip1_kj23x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sticker-smile2-duotone"} {...others} />);
}

export default Component;
