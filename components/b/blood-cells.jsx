import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qlezl__jn.css';
import '../../css/w/w8sk9jb0e.css';
import '../../css/u/uo3128blt.css';
import '../../css/m/mcus1xbqk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="qlezl__jn"/><path clip-rule="evenodd" class="w8sk9jb0e"/><path class="uo3128blt"/><path clip-rule="evenodd" class="mcus1xbqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blood-cells"} {...others} />);
}

export default Component;
