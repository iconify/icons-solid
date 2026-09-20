import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/ghye6ac_s.css';
import '../../css/q/q-qszr_we.css';
import '../../css/x/xzbd7ubcv.css';
import '../../css/c/c9aqz6byz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ghye6ac_s"/><path clip-rule="evenodd" class="q-qszr_we"/><path class="xzbd7ubcv"/><path class="c9aqz6byz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:album-duotone"} {...others} />);
}

export default Component;
