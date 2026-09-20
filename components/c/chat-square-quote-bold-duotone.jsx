import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/to8tv_bdi.css';
import '../../css/j/jjizm5beh.css';
import '../../css/r/r4qjc2buy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="to8tv_bdi"/><path clip-rule="evenodd" class="jjizm5beh"/><path clip-rule="evenodd" class="r4qjc2buy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-quote-bold-duotone"} {...others} />);
}

export default Component;
