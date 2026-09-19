import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uyu22ac-b.css';
import '../../css/o/ou4_wub3x.css';
import '../../css/o/odpiibnui.css';
import '../../css/w/w9jf0vajj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="uyu22ac-b"/><path clip-rule="evenodd" class="ou4_wub3x"/><path clip-rule="evenodd" class="odpiibnui"/><path class="w9jf0vajj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:gonorrhea-alt-outline"} {...others} />);
}

export default Component;
