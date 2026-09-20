import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wq_sky9vv.css';
import '../../css/w/w0aca8bue.css';
import '../../css/x/xkocfl-zq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wq_sky9vv"/><path clip-rule="evenodd" class="w0aca8bue"/><path class="xkocfl-zq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:smart-speaker-duotone"} {...others} />);
}

export default Component;
