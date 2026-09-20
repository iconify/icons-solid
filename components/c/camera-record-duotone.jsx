import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jg-zjmaar.css';
import '../../css/u/uj9_4b6rk.css';
import '../../css/e/e61scxqpx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jg-zjmaar"/><path clip-rule="evenodd" class="uj9_4b6rk"/><path class="e61scxqpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:camera-record-duotone"} {...others} />);
}

export default Component;
