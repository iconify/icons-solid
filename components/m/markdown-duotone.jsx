import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/buvluubwx.css';
import '../../css/l/ln-1754us.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="buvluubwx secondary"/><path class="ln-1754us primary"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:markdown-duotone"} {...others} />);
}

export default Component;
