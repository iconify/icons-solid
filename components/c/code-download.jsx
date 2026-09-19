import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/u/u52o0g_xp.css';
import '../../css/c/cndo6138b.css';
import '../../css/i/i266yibok.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="u52o0g_xp"/><path class="cndo6138b"/><path class="i266yibok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:code-download"} {...others} />);
}

export default Component;
