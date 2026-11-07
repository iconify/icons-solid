import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3ixgbbtk.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/w/wj0sbvbpy.css';
import '../../css/x/xn05bwh0o.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r3ixgbbtk"/><g class="xtpeb-edw"><path class="wj0sbvbpy"/><path class="xn05bwh0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:buildings-3-bold-duotone"} {...others} />);
}

export default Component;
