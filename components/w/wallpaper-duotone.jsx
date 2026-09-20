import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nbe48rbef.css';
import '../../css/w/w0etijb9w.css';
import '../../css/j/j_js342kv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="nbe48rbef"/><path clip-rule="evenodd" class="w0etijb9w"/><path class="j_js342kv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:wallpaper-duotone"} {...others} />);
}

export default Component;
