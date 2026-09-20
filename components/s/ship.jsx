import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hyt9a0afz.css';
import '../../css/x/xefmovr8o.css';
import '../../css/a/a56fv5c3s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hyt9a0afz"/><path class="xefmovr8o"/><path class="a56fv5c3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:ship"} {...others} />);
}

export default Component;
