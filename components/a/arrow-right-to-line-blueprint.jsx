import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/l5u91vwjl.css';
import '../../css/b/bkfrv9bzn.css';
import '../../css/z/z7iiffx2i.css';
import '../../css/j/jia-glb4z.css';
import '../../css/v/vspld8buo.css';
import '../../css/w/wbcfikbug.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="l5u91vwjl wm-deco"/><path class="bkfrv9bzn wm-deco"/><path class="wm-k z7iiffx2i"/><path class="jia-glb4z wm-a"/><path class="vspld8buo wm-k"/><path class="wbcfikbug wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-right-to-line-blueprint"} {...others} />);
}

export default Component;
