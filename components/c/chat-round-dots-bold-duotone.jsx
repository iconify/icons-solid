import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l120o-bnn.css';
import '../../css/z/zi0xacbsp.css';
import '../../css/k/kxfvssb0y.css';
import '../../css/d/dsv-bdbie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="l120o-bnn"/><path class="zi0xacbsp"/><path class="kxfvssb0y"/><path class="dsv-bdbie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-dots-bold-duotone"} {...others} />);
}

export default Component;
