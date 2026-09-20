import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yns8t4bbk.css';
import '../../css/d/djt0e9b0f.css';
import '../../css/o/oip2tteqt.css';
import '../../css/c/czuzz3bda.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="yns8t4bbk"/><path clip-rule="evenodd" class="djt0e9b0f"/><path class="oip2tteqt"/><path class="czuzz3bda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:music-lib2-duotone"} {...others} />);
}

export default Component;
