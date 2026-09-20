import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/w/wbmr1-bmv.css';
import '../../css/t/tlu_9ubfk.css';
import '../../css/r/rvy95yb6l.css';
import '../../css/i/i0xyrdvtv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="wbmr1-bmv"/><path class="tlu_9ubfk"/></g><path class="rvy95yb6l"/><path class="i0xyrdvtv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:unlink-bold-duotone"} {...others} />);
}

export default Component;
