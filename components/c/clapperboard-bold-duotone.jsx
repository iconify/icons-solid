import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z5z4rnbzy.css';
import '../../css/h/h1ftphbzx.css';
import '../../css/v/vai_yebix.css';
import '../../css/u/up558kbnc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="z5z4rnbzy"/><path class="h1ftphbzx"/><path class="vai_yebix"/><path class="up558kbnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clapperboard-bold-duotone"} {...others} />);
}

export default Component;
