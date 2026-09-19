import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ij_befb1g.css';
import '../../css/x/xqt-kufwm.css';
import '../../css/l/l5q6pxbzs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ij_befb1g"/><path clip-rule="evenodd" class="xqt-kufwm"/><path class="l5q6pxbzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:nametag"} {...others} />);
}

export default Component;
