import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/h6hzmw_la.css';
import '../../css/r/rojo8acxw.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/w/w07woac0g.css';
import '../../css/w/wuxib33uk.css';
import '../../css/x/x2nj8ubqa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="h6hzmw_la wm-deco"/><path class="rojo8acxw wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="w07woac0g wm-k"/><path class="wm-a wuxib33uk"/><path class="wm-k x2nj8ubqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:trash-2-blueprint"} {...others} />);
}

export default Component;
