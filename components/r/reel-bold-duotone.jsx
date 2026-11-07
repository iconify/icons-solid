import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bm5ls4ggl.css';
import '../../css/y/y_j7etbzt.css';
import '../../css/i/ikx_kubxm.css';
import '../../css/l/lirn7ibcb.css';
import '../../css/g/g_tyrxh-u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bm5ls4ggl"/><path class="y_j7etbzt"/><path class="ikx_kubxm"/><path class="lirn7ibcb"/><path class="g_tyrxh-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:reel-bold-duotone"} {...others} />);
}

export default Component;
