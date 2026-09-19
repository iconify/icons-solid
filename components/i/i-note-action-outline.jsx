import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/ffba1lbor.css';
import '../../css/a/aso4_8b4r.css';
import '../../css/b/bg3v29b8u.css';
import '../../css/e/ednc2ibcx.css';
import '../../css/j/jdgb0hbra.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="ffba1lbor"/><path class="aso4_8b4r"/><path class="bg3v29b8u"/><path class="ednc2ibcx"/><path clip-rule="evenodd" class="jdgb0hbra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:i-note-action-outline"} {...others} />);
}

export default Component;
