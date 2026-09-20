import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nqmqffbvv.css';
import '../../css/q/qmpj-ib3u.css';
import '../../css/d/dytwysbcm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="nqmqffbvv"/><path clip-rule="evenodd" class="qmpj-ib3u"/><path class="dytwysbcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:gamepad-low-duotone"} {...others} />);
}

export default Component;
